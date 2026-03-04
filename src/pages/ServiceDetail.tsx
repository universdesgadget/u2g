import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const { data: service, isLoading } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: photos } = useQuery({
    queryKey: ["service-photos", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("service_id", id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: videos } = useQuery({
    queryKey: ["service-videos", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .eq("service_id", id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Service introuvable</h1>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const hasContent = (photos?.length ?? 0) > 0 || (videos?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/#services" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Retour aux services
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {service.image_url && (
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full md:w-80 h-56 object-cover rounded-lg shadow-elegant"
                />
              )}
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                {service.description && (
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                )}
                <Button asChild className="mt-6">
                  <a href="/#contact">Demander un devis</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {hasContent ? (
            <>
              {photos && photos.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-16"
                >
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                    Photos
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {photos.map((photo, i) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                          <h3 className="font-display font-semibold text-card-foreground">
                            {photo.title}
                          </h3>
                          {photo.description && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {photo.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {videos && videos.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                    Vidéos
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video, i) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="overflow-hidden rounded-lg shadow-elegant bg-card"
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
                          <h3 className="font-display font-semibold text-card-foreground">
                            {video.title}
                          </h3>
                          {video.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {video.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground text-center py-12"
            >
              Aucune photo ou vidéo pour ce service pour le moment.
            </motion.p>
          )}
        </div>
      </main>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-2">
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Photo agrandie"
              className="w-full h-auto rounded"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
