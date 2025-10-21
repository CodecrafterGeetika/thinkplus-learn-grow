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
  link: string;
  instructor?: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "CAT Quantitative Aptitude Mastery",
    category: "CAT",
    description: "Master arithmetic, algebra, geometry, and number systems with advanced problem-solving techniques.",
    duration: "16 weeks",
    price: "₹4,999",
    level: "All Levels",
    students: 3847,
    rating: 4.9,
    link: "https://cracku.in/cat-quantitative-aptitude",
    instructor: "IIM-A Alumni"
  },
  {
    id: "2",
    title: "CAT VARC Complete Course",
    category: "CAT",
    description: "Verbal Ability & Reading Comprehension - master grammar, vocabulary, and RC strategies.",
    duration: "14 weeks",
    price: "₹3,999",
    level: "Intermediate",
    students: 2923,
    rating: 4.8,
    link: "https://www.iquanta.in/cat-verbal-ability",
    instructor: "IIM-B Alumni"
  },
  {
    id: "3",
    title: "CAT DILR Bootcamp",
    category: "CAT",
    description: "Data Interpretation & Logical Reasoning with 500+ practice sets and live problem solving.",
    duration: "12 weeks",
    price: "₹3,999",
    level: "Intermediate",
    students: 3421,
    rating: 4.9,
    link: "https://www.pagalguy.com/cat-dilr-preparation",
    instructor: "IIM-C Alumni"
  },
  {
    id: "4",
    title: "IPMAT Complete Preparation",
    category: "IPMAT",
    description: "Comprehensive IPMAT course covering Quant, Verbal, and interview preparation for IIMs.",
    duration: "20 weeks",
    price: "₹5,999",
    level: "Beginner",
    students: 1864,
    rating: 4.8,
    link: "https://www.toprankers.com/ipmat-coaching",
    instructor: "IIM Alumni"
  },
  {
    id: "5",
    title: "CLAT Legal Reasoning & GK",
    category: "CLAT",
    description: "Master legal reasoning, current affairs, and logical reasoning for NLU admissions.",
    duration: "18 weeks",
    price: "₹4,499",
    level: "Intermediate",
    students: 1531,
    rating: 4.7,
    link: "https://www.legaledge.in/clat-preparation",
    instructor: "NLU Faculty"
  },
  {
    id: "6",
    title: "Mock Test Series - All Exams",
    category: "Test Series",
    description: "50+ full-length CAT, IPMAT, CLAT mocks with detailed analysis and performance tracking.",
    duration: "6 months",
    price: "₹2,999",
    level: "All Levels",
    students: 5237,
    rating: 4.9,
    link: "https://testbook.com/cat-mock-test",
    instructor: "Expert Panel"
  },
  {
    id: "7",
    title: "PI & WAT Masterclass",
    category: "Interview Prep",
    description: "Personal Interview and Written Ability Test preparation with real IIM panelists.",
    duration: "8 weeks",
    price: "₹3,499",
    level: "Advanced",
    students: 2145,
    rating: 4.8,
    link: "https://www.mbacrystalball.com/pi-wat-preparation",
    instructor: "IIM Panel"
  },
  {
    id: "8",
    title: "Current Affairs for Competitive Exams",
    category: "General Knowledge",
    description: "Daily updates, monthly compilations, and quizzes on current affairs for all exams.",
    duration: "12 months",
    price: "Free",
    level: "All Levels",
    students: 6832,
    rating: 4.6,
    link: "https://www.adda247.com/current-affairs",
    instructor: "Editorial Team"
  },
  {
    id: "9",
    title: "Advanced Problem Solving Sessions",
    category: "CAT",
    description: "Weekly live sessions solving CAT previous year papers and high-difficulty questions.",
    duration: "10 weeks",
    price: "₹2,499",
    level: "Advanced",
    students: 1923,
    rating: 4.9,
    link: "https://www.2iim.com/cat-preparation",
    instructor: "IIM Alumni"
  },
];

export const categories = [
  "All",
  "CAT",
  "IPMAT",
  "CLAT",
  "Test Series",
  "Interview Prep",
  "General Knowledge",
];
