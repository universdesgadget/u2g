import { motion } from "framer-motion";
import { Download, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaCardProps {
  type: "photo" | "video";
  src: string;
  title: string;
  description?: string;
  onPreview?: () => void;
  className?: string;
}

const MediaCard = ({ type, src, title, description, onPreview, className = "" }: MediaCardProps) => {
  const ext = type === "photo" ? "jpg" : "mp4";
  const downloadFilename = `${title.replace(/\s+/g, "-")}.${ext}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative alibaba-image-card rounded-lg bg-card border border-border/50 overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      <div
        className={`relative overflow-hidden ${type === "photo" ? "aspect-[4/3] cursor-pointer" : "aspect-video"}`}
        onClick={type === "photo" ? onPreview : undefined}
      >
        {type === "photo" ? (
          <>
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              {onPreview && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full opacity-90"
                  onClick={(e) => { e.stopPropagation(); onPreview(); }}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              )}
              <a href={src} download={downloadFilename} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full opacity-90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </>
        ) : (
          <>
            <video
              src={src}
              className="w-full h-full object-cover"
              preload="metadata"
              controls
              onClick={(e) => e.stopPropagation()}
            />
            <a
              href={src}
              download={downloadFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2"
            >
              <Button size="sm" variant="secondary" className="shadow-lg">
                <Download className="w-4 h-4 mr-1" /> Télécharger
              </Button>
            </a>
          </>
        )}
      </div>
      <div className="p-4 flex items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-semibold text-card-foreground line-clamp-1">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          )}
        </div>
        {type === "video" && (
          <a href={src} download={downloadFilename} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button size="icon" variant="ghost">
              <Download className="w-4 h-4" />
            </Button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default MediaCard;
