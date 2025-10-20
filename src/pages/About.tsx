import { Target, Eye, Heart, Zap } from "lucide-react";
import { teamMembers } from "@/data/team";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About ThinkPlus</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize education by providing affordable, high-quality courses that empower
              students to achieve their career goals and unlock their full potential. We believe
              everyone deserves access to world-class learning resources.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become India's most trusted EdTech platform, known for transforming lives through
              education. We envision a future where every student has the skills and confidence to
              thrive in their chosen field.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 bg-secondary rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Student-Centric",
                description: "Every decision we make puts our students' success first.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We continuously evolve our platform to enhance learning experiences.",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We maintain the highest standards in course quality and support.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate educators and technologists working together to transform education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-56 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-4xl font-bold">
                    {member.avatar}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-10 md:p-16 text-white">
          <div className="text-5xl mb-6">"</div>
          <blockquote className="text-2xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
            Learning without limits — the ThinkPlus way.
          </blockquote>
          <p className="text-lg text-white/90">
            Join us in our journey to make education accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
