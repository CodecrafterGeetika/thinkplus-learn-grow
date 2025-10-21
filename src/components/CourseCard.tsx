import { Clock, Users, Star, ExternalLink, Award, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <a 
      href={course.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full group cursor-pointer"
    >
      <div className="h-full bg-card rounded-xl overflow-hidden shadow-card hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.4)] transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/50 relative">
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Icon header with gradient */}
        <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-pink-500/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <BookOpen className="w-12 h-12 text-primary relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
          <TrendingUp className="w-6 h-6 text-pink-500 absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
              {course.category}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
              {course.level}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]">
            {course.title}
          </h3>

          {course.instructor && (
            <div className="flex items-center gap-1.5 mb-3 text-xs font-medium text-primary/80">
              <Award className="w-3.5 h-3.5" />
              <span>{course.instructor}</span>
            </div>
          )}

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
            {course.description}
          </p>

          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground flex-wrap gap-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary/70" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary/70" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{course.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-pink-600 to-primary bg-clip-text text-transparent">
              {course.price}
            </span>
            <Button 
              size="sm"
              className="gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2"
            >
              Enroll Now
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </a>
  );
};

export default CourseCard;
