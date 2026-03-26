import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Invoicing from "./pages/Invoicing";
import Accounting from "./pages/Accounting";
import CardReader from "./pages/CardReader";
import BusinessVsPersonal from "./pages/BusinessVsPersonal";
import CompanySetup from "./pages/CompanySetup";
import Reviews from "./pages/Reviews";
import ClaimOffer from "./pages/ClaimOffer";
import Features from "./pages/Features";
import Compare from "./pages/Compare";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/pricing" component={() => <Layout><Pricing /></Layout>} />
      <Route path="/features" component={() => <Layout><Features /></Layout>} />
      <Route path="/invoicing" component={() => <Layout><Invoicing /></Layout>} />
      <Route path="/accounting" component={() => <Layout><Accounting /></Layout>} />
      <Route path="/card-reader" component={() => <Layout><CardReader /></Layout>} />
      <Route path="/business-vs-personal" component={() => <Layout><BusinessVsPersonal /></Layout>} />
      <Route path="/company-setup" component={() => <Layout><CompanySetup /></Layout>} />
      <Route path="/reviews" component={() => <Layout><Reviews /></Layout>} />
      <Route path="/claim-offer" component={() => <Layout><ClaimOffer /></Layout>} />
      <Route path="/compare" component={() => <Layout><Compare /></Layout>} />
      <Route path="/blog" component={() => <Layout><Blog /></Layout>} />
      <Route path="/blog/:slug" component={() => <Layout><BlogPost /></Layout>} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
