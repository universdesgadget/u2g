import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const APropos = lazy(() => import("./pages/APropos"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Index scrollTo="services" />} />
            <Route path="/galerie" element={<Index scrollTo="gallery" />} />
            <Route path="/temoignages" element={<Index scrollTo="temoignages" />} />
            <Route path="/contact" element={<Index scrollTo="contact" />} />
            <Route path="/localisation" element={<Index scrollTo="location" />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
