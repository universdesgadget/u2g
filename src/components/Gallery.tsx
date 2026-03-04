import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("all");

  const { data: services } = useQuery({
    queryKey: ["services-list"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("title", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: photos, isLoading: photosLoading } = useQuery({
    queryKey: ["gallery-photos", selectedService],
    queryFn: async () => {
      let query = supabase
        .from("photos")
        .select("*, services(id, title)")
        .order("created_at", { ascending: false });

      if (selectedService !== "all") {
        query = query.eq("service_id", selectedService);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const { data: videos, isLoading: videosLoading } = useQuery({
    queryKey: ["gallery-videos", selectedService],
    queryFn: async () => {
      let query = supabase
        .from("videos")
        .select("*, services(id, title)")
        .order("created_at", { ascending: false });

      if (selectedService !== "all") {
        query = query.eq("service_id", selectedService);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Nos Réalisations</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mt-3">
            Galerie
          </h2>
          <p className="text-secondary-foreground/60 mt-4 max-w-lg mx-auto">
            Découvrez nos réalisations ou explorez par service.
          </p>
        </motion.div>

        {/* Filtre par service */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filtrer par service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les services</SelectItem>
              {services?.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-secondary-foreground/60">
            Ou cliquez sur un service dans la section Services pour voir ses réalisations.
          </p>
        </div>

        {photosLoading ? (
          <p className="text-center text-muted-foreground">Chargement...</p>
        ) : !photos?.length && !videos?.length ? (
          <p className="text-center text-secondary-foreground/60 py-12">
            Aucun contenu pour le moment. Visitez nos services pour découvrir nos réalisations.
          </p>
        ) : (
          <>
            {photos && photos.length > 0 && (
              <>
                <h3 className="text-xl font-display font-semibold text-secondary-foreground mb-6">Photos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {photos.map((photo, i) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative overflow-hidden rounded-lg shadow-elegant bg-card cursor-pointer"
                      onClick={() => setSelectedPhoto(photo.image_url)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={photo.image_url}
                          alt={photo.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-card-foreground">{photo.title}</h3>
                        {photo.description && (
                          <p className="text-sm text-muted-foreground mt-1">{photo.description}</p>
                        )}
                        {photo.services && (
                          <Link
                            to={`/services/${photo.services.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block mt-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 px-2 py-1 rounded-full transition-colors"
                          >
                            {photo.services.title}
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {videos && videos.length > 0 && (
              <>
                <h3 className="text-xl font-display font-semibold text-secondary-foreground mb-6">Vidéos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, i) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative overflow-hidden rounded-lg shadow-elegant bg-card"
                    >
                      <div className="aspect-video overflow-hidden bg-muted">
                        <video
                          src={video.video_url}
                          poster={video.thumbnail_url || undefined}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-card-foreground">{video.title}</h3>
                        {video.description && (
                          <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                        )}
                        {video.services && (
                          <Link
                            to={`/services/${video.services.id}`}
                            className="inline-block mt-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 px-2 py-1 rounded-full transition-colors"
                          >
                            {video.services.title}
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {videosLoading && (
              <p className="text-center text-muted-foreground mt-8">Chargement des vidéos...</p>
            )}
          </>
        )}

        {/* Lightbox */}
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-2">
            {selectedPhoto && (
              <img src={selectedPhoto} alt="Photo agrandie" className="w-full h-auto rounded" />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
