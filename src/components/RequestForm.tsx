import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, CONTACT_BG } from "@/lib/constants";

const serviceOptions = [
  "Impression Laser",
  "Personnalisation d'Objets",
  "Impression de Bâches",
  "Roll-Up",
  "Sérigraphie",
];

const RequestForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildMessage = () => {
    return `Bonjour Univers des Gadgets! Je suis ${form.name}.\n\nService: ${form.service}\nDescription: ${form.description}\nTéléphone: ${form.phone}\nEmail: ${form.email}`;
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.service) {
      toast({ title: "Veuillez remplir les champs obligatoires", variant: "destructive" });
      return;
    }
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`, "_blank");
  };

  const handleEmail = () => {
    if (!form.name || !form.email || !form.service) {
      toast({ title: "Veuillez remplir les champs obligatoires", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Demande de service: ${form.service}`);
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src={CONTACT_BG}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/og-image.jpg";
          }}
        />
        <div className="absolute inset-0 bg-secondary/92" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contactez-nous
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mt-3">
            Demandez un Devis
          </h2>
          <p className="text-secondary-foreground/80 mt-4 max-w-xl mx-auto">
            Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Infos contact avec effet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-background/10 backdrop-blur-md rounded-xl p-6 border border-border/30 hover:border-primary/40 transition-colors">
              <p className="text-secondary-foreground/90 mb-6">
                Vous pouvez aussi nous contacter directement via WhatsApp ou par email.
                Notre équipe est à votre écoute pour concrétiser vos projets.
              </p>
              <div className="space-y-4 text-secondary-foreground/80">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>{CONTACT.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp: {CONTACT.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire avec effets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/95 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-elegant border border-border/30"
          >
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  animate={focusedField === "name" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom *</label>
                  <Input
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    maxLength={100}
                    className="transition-all"
                  />
                </motion.div>
                <motion.div
                  animate={focusedField === "phone" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone *</label>
                  <Input
                    placeholder="+237..."
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    maxLength={20}
                  />
                </motion.div>
              </div>

              <motion.div
                animate={focusedField === "email" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  maxLength={255}
                />
              </motion.div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Type de service *</label>
                <Select onValueChange={(val) => handleChange("service", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Description</label>
                <Textarea
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  onFocus={() => setFocusedField("description")}
                  onBlur={() => setFocusedField(null)}
                  maxLength={1000}
                />
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  onClick={handleEmail}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold hover:shadow-gold/50 transition-shadow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer par Email
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[hsl(142,70%,35%)] text-white hover:bg-[hsl(142,70%,30%)]"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Envoyer via WhatsApp
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
