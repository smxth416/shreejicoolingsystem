import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, CheckCircle2, Factory, FileText, Settings } from "lucide-react";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                    <Button onClick={() => navigate("/products")}>Back to Products</Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
                <div className="absolute inset-0 noise-texture opacity-90"></div>
                <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/products")}
                        className="mb-8 text-white hover:bg-white/10 hover:text-white"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                    </Button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
                                {product.category}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl text-white/90 max-w-xl mb-8">
                                {product.description}
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg">
                                    Enquire Now
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-4 shadow-2xl">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="w-full px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Description & Specs */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Detailed Description */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-primary" /> Product Overview
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {product.longDescription || product.description}
                                </p>
                            </div>

                            {/* Specifications Table */}
                            {product.specifications && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Settings className="h-6 w-6 text-primary" /> Technical Specifications
                                    </h2>
                                    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                                        <table className="w-full text-left">
                                            <tbody className="divide-y divide-border">
                                                {Object.entries(product.specifications).map(([key, value], index) => (
                                                    <tr key={key} className={index % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                                                        <td className="p-4 font-medium text-muted-foreground w-1/3 border-r">{key}</td>
                                                        <td className="p-4 font-semibold">{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Features & Applications */}
                        <div className="space-y-8">

                            {/* Features List */}
                            {product.features && (
                                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                                    <h3 className="text-xl font-bold mb-6 text-primary">Key Features</h3>
                                    <ul className="space-y-4">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Applications */}
                            {product.applications && (
                                <div className="bg-card rounded-3xl p-8 border shadow-sm">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Factory className="h-5 w-5 text-accent" /> Ideal Applications
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app, i) => (
                                            <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm font-medium border">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA Box */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 text-white shadow-xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Interested?</h3>
                                <p className="text-white/80 mb-6">Get a custom quote for your requirements today.</p>
                                <Link to="/contact">
                                    <Button variant="secondary" className="w-full font-bold">Request Quote</Button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProductDetail;
