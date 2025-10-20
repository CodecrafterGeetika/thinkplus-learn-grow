import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Tips to Crack CAT 2024",
      excerpt: "Essential strategies and tips from IIM alumni to help you ace the Common Admission Test.",
      date: "Oct 15, 2024",
      readTime: "5 min read",
      category: "CAT"
    },
    {
      id: 2,
      title: "IPMAT Preparation Guide",
      excerpt: "A comprehensive guide to prepare for IPMAT and secure your seat in top IIMs.",
      date: "Oct 12, 2024",
      readTime: "7 min read",
      category: "IPMAT"
    },
    {
      id: 3,
      title: "CLAT Success Stories",
      excerpt: "Inspiring stories of students who cleared CLAT and got into top National Law Universities.",
      date: "Oct 10, 2024",
      readTime: "4 min read",
      category: "CLAT"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tips, and success stories to guide your exam preparation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent"></div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
