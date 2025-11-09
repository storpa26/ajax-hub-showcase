import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandVesta from "./pages/BrandVesta";
import QuoteVesta from "./pages/QuoteVesta";
import Review from "./pages/Review";
import Booking from "./pages/Booking";
import Portal from "./pages/Portal";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brands/vesta" element={<BrandVesta />} />
          <Route path="/quote/vesta" element={<QuoteVesta />} />
          <Route path="/review" element={<Review />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
