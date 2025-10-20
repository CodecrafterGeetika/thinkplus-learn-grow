export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "ThinkPlus helped me transition from a non-tech background to landing my dream job. The courses are practical and well-structured!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "MBA Student",
    content: "The digital marketing course gave me hands-on skills that I immediately applied to my startup. Highly recommend!",
    rating: 5,
    avatar: "RV",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "UI/UX Designer",
    content: "I loved the design course! The instructors are experts and the community support is amazing. Worth every penny.",
    rating: 5,
    avatar: "AP",
  },
  {
    id: "4",
    name: "Karthik Reddy",
    role: "Data Analyst",
    content: "The data science program transformed my career. I went from Excel sheets to building ML models in just 4 months!",
    rating: 5,
    avatar: "KR",
  },
  {
    id: "5",
    name: "Sneha Gupta",
    role: "Marketing Manager",
    content: "ThinkPlus courses are affordable and effective. I upskilled without breaking the bank. Thank you team!",
    rating: 5,
    avatar: "SG",
  },
];
