
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AnimatedBackground className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-shakti-300 to-shakti-600 flex items-center justify-center">
          <span className="font-serif text-3xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4 energy-text">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The cosmic energy you're seeking seems to have flowed elsewhere. 
          Let's guide you back to our spiritual center.
        </p>
        <Link
          to="/"
          className="rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shakti-500 transition-all duration-300 hover:shadow-lg hover:shadow-shakti-500/20 inline-flex items-center"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </AnimatedBackground>
  );
};

export default NotFound;
