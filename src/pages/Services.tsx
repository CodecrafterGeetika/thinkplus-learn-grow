import { BookOpen, Users, Target, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "CAT Preparation",
      description: "Comprehensive coaching for Common Admission Test with expert faculty and personalized guidance."
    },
    {
      icon: Target,
      title: "IPMAT Coaching",
      description: "Specialized training for Integrated Programme in Management Aptitude Test to secure your IIM seat."
    },
    {
      icon: Users,
      title: "CLAT Training",
      description: "Expert preparation for Common Law Admission Test with proven strategies and mock tests."
    },
    {
      icon: Award,
      title: "Mock Tests & Analysis",
      description: "Regular mock tests with detailed performance analysis to track your progress."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coaching programs designed by IIM graduates to help you crack competitive exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
