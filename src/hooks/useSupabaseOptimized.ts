import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

/**
 * Hook optimisé pour les requêtes Supabase avec caching agressif
 * - Réutilise les résultats pendant 5 minutes
 * - Déduplique les requêtes identiques
 * - Réduit le nombre d'appels API
 */
export function useCachedSupabaseQuery<T>(
  queryKey: (string | number | boolean)[] | string,
  queryFn: () => Promise<T>,
  options?: Omit<UseQueryOptions<T, Error, T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T, Error, T>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn,
    staleTime: 5 * 60 * 1000, // 5 minutes - données considérées comme "fraîches"
    gcTime: 10 * 60 * 1000, // 10 minutes - garde en cache même si non utilisé
    refetchOnWindowFocus: false, // Ne pas re-fetcher au focus pour réduire requêtes
    ...options,
  });
}

/**
 * Hook pour récupérer les services avec caching optimal
 */
export function useOptimizedServices(isActive: boolean = true) {
  return useCachedSupabaseQuery(
    ['services', isActive],
    async () => {
      const { data, error } = await supabase
        .from('services')
        .select('id, title, description, image_url, sort_order')
        .eq('is_active', isActive)
        .order('sort_order', { ascending: true })
        .order('title', { ascending: true });
      if (error) throw error;
      return data || [];
    }
  );
}

/**
 * Hook pour récupérer les photos avec caching optimal
 */
export function useOptimizedPhotos(serviceId?: string) {
  return useCachedSupabaseQuery(
    ['photos', serviceId],
    async () => {
      let query = supabase
        .from('photos')
        .select('*, services(id, title)')
        .order('created_at', { ascending: false });

      if (serviceId) {
        query = query.eq('service_id', serviceId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    },
    { enabled: true }
  );
}

/**
 * Hook pour récupérer les vidéos avec caching optimal
 */
export function useOptimizedVideos(serviceId?: string) {
  return useCachedSupabaseQuery(
    ['videos', serviceId],
    async () => {
      let query = supabase
        .from('videos')
        .select('*, services(id, title)')
        .order('created_at', { ascending: false });

      if (serviceId) {
        query = query.eq('service_id', serviceId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    },
    { enabled: true }
  );
}

/**
 * Hook pour récupérer tous les témoignages avec caching optimal
 */
export function useOptimizedTestimonials() {
  return useCachedSupabaseQuery(
    ['testimonials'],
    async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    }
  );
}
