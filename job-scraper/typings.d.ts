
interface Board {
  columns: Map<Status, Column>;
}

type TypedColumn = 'Rejected' | 'Offer' | 'Applied' | 'Assessment' | 'Interview';

interface Post {
  id: string;
  title: string;
  company: string;
  status: Status;
  description: string | null;
  requirements: string | null;
  location: string;
  postedDate: Date;
  updatedDate: Date;
  userId: string;
}

interface Column {
  id: Status;
  posts: Post[];
}

 interface User {
  id: string;
  username?: string;
  email: string;
  hashedPassword?: string;
  createdAt: Date;
  jobs: Job[];
  internships: Internship[];
}

 interface Job {
  id: string;
  jobTitle: string;
  company: string;
  description?: string;
  requirements?: string;
  location: string;
  postedDate: Date;
  status: Status;
  userId: string;
}

 interface Internship {
  id: string;
  titleI: string;
  companyI: string;
  descriptionI?: string;
  requirementsI?: string;
  locationI: string;
  postedDateI: Date;
  status: Status;
  userId: string;
}

enum Status {
  Rejected = "Rejected",
  Offer = "Offer",
  Applied = "Applied",
  Assessment = "Assessment",
  Interview = "Interview"
}
