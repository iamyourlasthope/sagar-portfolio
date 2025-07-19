import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import LetsConnect from "./pages/LetsConnect";
import NotFound from "./pages/NotFound";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <GoogleAnalytics />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lets-connect" element={<LetsConnect />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
