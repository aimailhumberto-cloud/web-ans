import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Pages
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import Masterclasses from "./pages/Masterclasses";
import MasterclassDetail from "./pages/MasterclassDetail";
import SurfCamps from "./pages/SurfCamps";
import SurfCampDetail from "./pages/SurfCampDetail";
import Retreats from "./pages/Retreats";
import RetreatDetail from "./pages/RetreatDetail";
import Nosotros from "./pages/Nosotros";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/clases" component={Clases} />
        <Route path="/masterclasses" component={Masterclasses} />
        <Route path="/masterclasses/:slug" component={MasterclassDetail} />
        <Route path="/surf-camps" component={SurfCamps} />
        <Route path="/surf-camps/:slug" component={SurfCampDetail} />
        <Route path="/retreats" component={Retreats} />
        <Route path="/retreats/:slug" component={RetreatDetail} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
