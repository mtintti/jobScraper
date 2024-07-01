// old code from tutorial
/*interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "Rejected" | "Applied" | "Assessment" | "Interview" | "Offer";

interface Column{
    id:TypedColumn;
    posts: Posts[];
}

interface Posts{
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    company: string;

}*/
    
   
// new
interface Board {
  //columns: Map<TypedColumn, Column>;
  columns: Map<Status, Column>;
}

type TypedColumn = 'Rejected' | 'Offer' | 'Applied' | 'Assessment' | 'Interview';

interface Post {
  id: string;
  title: string;
  company: string;
  status: Status;
  description?: string | null;
  requirements?: string | null;
  location: string;
  postedDate: Date;
  userId: string;
}

interface Column {
  //id: TypedColumn;
  id: Status;
  posts: Post[];
}

// and for jobModal

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
  //status: JobStatus;
  status: Status;
  userId: string;
}
/*
 enum JobStatus {
  Rejected = "Rejected",
  Offer = "Offer",
  Applied = "Applied",
  Assessment = "Assessment",
  Interview = "Interview",
}*/

 interface Internship {
  id: string;
  titleI: string;
  companyI: string;
  descriptionI?: string;
  requirementsI?: string;
  locationI: string;
  postedDateI: Date;
  //statusI: InternshipStatus;
  status: Status;
  userId: string;
}
/*
 enum InternshipStatus {
  Rejected = "Rejected",
  Offer = "Offer",
  Applied = "Applied",
  Assessment = "Assessment",
  Interview = "Interview",
}*/

enum Status {
  Rejected = "Rejected",
  Offer = "Offer",
  Applied = "Applied",
  Assessment = "Assessment",
  Interview = "Interview"
}
