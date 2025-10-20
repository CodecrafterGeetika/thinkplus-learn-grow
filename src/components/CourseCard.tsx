import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <BookOpen className="w-16 h-16 text-primary" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
            {course.category}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{course.price}</span>
          <Button size="sm">Enroll Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
