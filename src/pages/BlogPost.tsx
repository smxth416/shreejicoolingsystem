import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-accent hover:underline">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <time className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{post.title}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
