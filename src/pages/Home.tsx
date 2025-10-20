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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTIwIDIyYzEuMS0uMDAxIDItLjkgMi0yczAtMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Decorative stars */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-white/20">
          <svg viewBox="0 0 51 48" fill="currentColor"><path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/></svg>
        </div>
        <div className="absolute top-1/3 left-1/6 w-4 h-4 text-white/20">
          <svg viewBox="0 0 51 48" fill="currentColor"><path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/></svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="text-primary text-lg md:text-xl font-semibold mb-3">
                Welcome To
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Think Plus Education
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">CAT, IPMAT, CLAT,</span> and More
              </h2>
              <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed">
                Crack <span className="font-semibold text-white">CAT, IPMAT, CLAT,</span> and other competitive exams the Thinkplus way with specially curated courses that are made by IIM grads for future IIM grads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="w-full sm:w-auto text-base px-8 bg-primary hover:bg-primary-hover">
                    Explore More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 border-white/30 text-white hover:bg-white/10">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Promotional Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-4">
                  <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-2">CLAT</h3>
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-3 rounded-lg inline-block">
                    <div className="text-3xl md:text-4xl font-bold">4 NLU <span className="text-2xl">Admissions</span></div>
                    <div className="text-sm">for first batch of 8 students</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                    <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=400" alt="Law University Campus" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" alt="Modern Campus Building" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Start your law career with CLAT through <span className="text-yellow-700 font-semibold">personalized coaching experience</span>
                </p>
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
