import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
  readTime?: string;
}
import { blogPosts } from "@/data/blog";

const Blog = () => (
  <Layout>
    <section className="relative overflow-hidden bg-[#2171b5] border-b border-white/10 py-20 pt-32">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-60"></div>
      <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog & Insights</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">HVAC tips, industry news, and expert advice for your cooling needs.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Featured Post (New) */}
        <div className="mb-16">
          {blogPosts.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-lg border">
              <div className="h-full min-h-[300px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  {blogPosts[0].category || "Featured Article"}
                </div>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>By Shreeji Editorial</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime || "8 min read"}</span>
                </div>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <Button>Read Full Article</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Blog Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <article key={post.id} className="flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden aspect-video">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border">{post.category || "General"}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-muted-foreground mb-2">{post.readTime || "5 min read"}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="px-0 w-fit text-primary inline-flex items-center">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar (New) */}
          <div className="space-y-8">
            {/* Categories Widget */}
            <div className="bg-card border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Categories</h3>
              <ul className="space-y-2">
                {["Industry News", "Maintenance Tips", "Energy Efficiency", "Case Studies", "Company Updates"].map((cat, i) => (
                  <li key={i} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{cat}</span>
                    <span className="bg-muted text-xs px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">{Math.floor(Math.random() * 20)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Subscribe to our Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">Get the latest HVAC tips and trends delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-lg border bg-background mb-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
