import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Quote } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const topCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEwNS44OTUtMiAyLTJzMiAuODk1IDIgMi0uODk1IDItMiAyLTItLjg5NS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Students to <span className="block">Think and Learn Better</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Join thousands of learners mastering new skills with expert-led courses designed for real-world success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Join Now
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">50K+</div>
                <div className="text-sm md:text-base text-white/80 mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">100+</div>
                <div className="text-sm md:text-base text-white/80 mt-1">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">4.8★</div>
                <div className="text-sm md:text-base text-white/80 mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ThinkPlus */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose ThinkPlus?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best learning experience with proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Courses",
                description: "Learn from industry professionals with years of real-world experience.",
              },
              {
                icon: Users,
                title: "Active Community",
                description: "Join a vibrant community of learners and mentors supporting your journey.",
              },
              {
                icon: Award,
                title: "Certificates",
                description: "Earn recognized certificates upon course completion to boost your resume.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Practical skills that help you advance your career and achieve goals.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 fade-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Top Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {topCourses.map((course, index) => (
              <div
                key={course.id}
                className="fade-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real students who transformed their careers with ThinkPlus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 fade-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-10 md:p-16 text-center text-white fade-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join ThinkPlus today and unlock your potential with expert-led courses designed for success.
            </p>
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
