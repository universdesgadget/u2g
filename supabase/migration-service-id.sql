-- =============================================================================
-- MIGRATION — Liaison Photos/Vidéos aux Services
-- =============================================================================
-- Exécute ce script dans l'éditeur SQL de Supabase pour associer les photos
-- et vidéos aux services. Après exécution, lors de l'ajout d'une photo/vidéo
-- en admin, tu sélectionneras le service associé.
-- =============================================================================

-- Ajouter service_id aux tables photos et videos
ALTER TABLE public.photos ADD COLUMN IF NOT EXISTS service_id UUID REFERENCES public.services(id) ON DELETE SET NULL;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS service_id UUID REFERENCES public.services(id) ON DELETE SET NULL;

-- Créer un index pour améliorer les performances des requêtes par service
CREATE INDEX IF NOT EXISTS idx_photos_service_id ON public.photos(service_id);
CREATE INDEX IF NOT EXISTS idx_videos_service_id ON public.videos(service_id);

-- =============================================================================
-- Note : Les colonnes category_id restent en place si tu les utilises.
-- Le service_id devient la liaison principale pour afficher le contenu
-- par service sur la page détaillée de chaque service.
-- =============================================================================
