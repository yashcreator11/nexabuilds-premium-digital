import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import SprintsPage from "@/pages/Sprints";
import WorkPage from "@/pages/Work";
import SquadPage from "@/pages/Squad";
import ContactPage from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sprints" element={<SprintsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/squad" element={<SquadPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Seamless redirects for common route synonyms */}
            <Route path="/portfolio" element={<Navigate to="/work" replace />} />
            <Route path="/case-studies" element={<Navigate to="/work" replace />} />
            <Route path="/pricing" element={<Navigate to="/sprints" replace />} />
            <Route path="/rates" element={<Navigate to="/sprints" replace />} />
            <Route path="/services" element={<Navigate to="/sprints" replace />} />
            <Route path="/process" element={<Navigate to="/sprints" replace />} />
            <Route path="/how-we-work" element={<Navigate to="/sprints" replace />} />
            <Route path="/team" element={<Navigate to="/squad" replace />} />
            <Route path="/about" element={<Navigate to="/squad" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
