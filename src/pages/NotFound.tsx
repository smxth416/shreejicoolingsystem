import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col min-h-[70vh] items-center justify-center bg-background py-20">
        <div className="text-center">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <h1 className="text-6xl font-bold text-primary">404</h1>
          </div>
          <p className="mb-8 text-2xl font-semibold text-foreground">Oops! Page not found</p>
          <Link to="/">
            <Button size="lg" className="rounded-full px-8">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
