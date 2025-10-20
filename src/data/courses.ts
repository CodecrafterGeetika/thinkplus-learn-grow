export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  students: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    category: "Programming",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects.",
    duration: "12 weeks",
    price: "Free",
    level: "Beginner",
    students: 2847,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Data Science & Machine Learning",
    category: "Data Science",
    description: "Learn Python, NumPy, Pandas, Scikit-learn, and TensorFlow. Work on industry projects.",
    duration: "16 weeks",
    price: "₹2,999",
    level: "Intermediate",
    students: 1923,
    rating: 4.9,
  },
  {
    id: "3",
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    description: "Master SEO, social media marketing, email campaigns, and Google Ads strategies.",
    duration: "8 weeks",
    price: "₹1,499",
    level: "Beginner",
    students: 3421,
    rating: 4.7,
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Learn Figma, user research, wireframing, prototyping, and design thinking principles.",
    duration: "10 weeks",
    price: "₹1,999",
    level: "Beginner",
    students: 1564,
    rating: 4.8,
  },
  {
    id: "5",
    title: "Advanced Excel & Data Analytics",
    category: "Business",
    description: "Master Excel formulas, pivot tables, Power Query, and data visualization techniques.",
    duration: "6 weeks",
    price: "Free",
    level: "Intermediate",
    students: 4231,
    rating: 4.6,
  },
  {
    id: "6",
    title: "Mobile App Development with Flutter",
    category: "Programming",
    description: "Build beautiful native iOS and Android apps using Flutter and Dart.",
    duration: "14 weeks",
    price: "₹3,499",
    level: "Intermediate",
    students: 987,
    rating: 4.9,
  },
  {
    id: "7",
    title: "Financial Planning & Investment",
    category: "Finance",
    description: "Learn budgeting, mutual funds, stock markets, and wealth creation strategies.",
    duration: "8 weeks",
    price: "₹2,499",
    level: "Beginner",
    students: 2145,
    rating: 4.7,
  },
  {
    id: "8",
    title: "Communication Skills for Professionals",
    category: "Soft Skills",
    description: "Enhance your public speaking, email writing, and interpersonal communication.",
    duration: "4 weeks",
    price: "Free",
    level: "All Levels",
    students: 5632,
    rating: 4.5,
  },
];

export const categories = [
  "All",
  "Programming",
  "Data Science",
  "Marketing",
  "Design",
  "Business",
  "Finance",
  "Soft Skills",
];
