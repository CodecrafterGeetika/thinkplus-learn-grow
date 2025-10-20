export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Amit Kumar",
    role: "Founder & CEO",
    bio: "PhD in Computer Science, 15+ years in EdTech. Passionate about democratizing education.",
    avatar: "AK",
  },
  {
    id: "2",
    name: "Neha Singh",
    role: "Head of Curriculum",
    bio: "Former professor at IIT Delhi. Designs industry-relevant courses that truly make an impact.",
    avatar: "NS",
  },
  {
    id: "3",
    name: "Vikram Joshi",
    role: "Chief Technology Officer",
    bio: "Ex-Google engineer. Building scalable learning platforms that reach millions of students.",
    avatar: "VJ",
  },
  {
    id: "4",
    name: "Pooja Mehta",
    role: "Head of Student Success",
    bio: "Dedicated to ensuring every student achieves their learning goals and career aspirations.",
    avatar: "PM",
  },
];
