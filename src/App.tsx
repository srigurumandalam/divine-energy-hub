
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Import pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load other pages for better performance
const Introduction = lazy(() => import("./pages/Introduction"));
const GuruLineage = lazy(() => import("./pages/GuruLineage"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Videos = lazy(() => import("./pages/Videos"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Publications = lazy(() => import("./pages/Publications"));
const MessageBoard = lazy(() => import("./pages/MessageBoard"));
const Activities = lazy(() => import("./pages/Activities"));
const Roadmap = lazy(() => import("./pages/Roadmap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Suspense fallback={
              <div className="flex items-center justify-center h-[80vh]">
                <div className="w-12 h-12 rounded-full border-4 border-t-shakti-500 border-shakti-200 animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/guru-lineage" element={<GuruLineage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/message-board" element={<MessageBoard />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/roadmap" element={<Roadmap />} />
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;