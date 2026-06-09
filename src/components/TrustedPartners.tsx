import { useMemo } from "react";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/lib/constants";

const SPHERE_RADIUS = 140;

const TrustedPartners = () => {
  const logos = useMemo(() => [...PARTNER_LOGOS], []);

  return (
    <section
      id="partenaires"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Partenaires
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Ils nous font confiance
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Des entreprises et institutions avec lesquelles nous collaborons au quotidien.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Sphère 3D — logos en orbite */}
          <div
            className="partner-sphere-scene relative mx-auto"
            style={{ width: 320, height: 320 }}
          >
            <div className="partner-sphere-glow absolute inset-0 rounded-full" aria-hidden />
            <div className="partner-sphere-ring partner-sphere-ring--outer" aria-hidden />
            <div className="partner-sphere-ring partner-sphere-ring--inner" aria-hidden />

            <div className="partner-sphere-rotator absolute inset-0 flex items-center justify-center">
              <div className="partner-sphere-orbit">
                {logos.map((partner, i) => {
                  const angle = (360 / logos.length) * i;
                  return (
                    <div
                      key={partner.id}
                      className="partner-sphere-face"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${SPHERE_RADIUS}px)`,
                      }}
                    >
                      <div className="partner-sphere-card group">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-10 max-w-[88px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                          width={88}
                          height={40}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.visibility = "hidden";
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bandeau défilant (complément mobile / lisibilité) */}
          <div className="mt-14 w-full max-w-4xl overflow-hidden mask-fade-edges">
            <div className="partner-marquee flex gap-10 w-max">
              {[...logos, ...logos].map((partner, i) => (
                <div
                  key={`${partner.id}-${i}`}
                  className="flex-shrink-0 px-6 py-4 rounded-xl bg-card border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-gold transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                    width={120}
                    height={40}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/logo.png";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
