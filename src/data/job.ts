import user, { IUser } from "./user";
import { v4 as uuidv4 } from "uuid";
export interface IApplicant {
  id: string;
  user: IUser;
  appliedAt: Date;
  experience: string;
  status: "Applied" | "Rejected" | "Shortlisted";
  holdingOffer: boolean;
  NoticePeriod: string;
}

export interface IJob {
  id: string;
  title: string;
  company: string;
  postedAt: Date;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  postedBy: IUser;
  applicantCount: number;
  applicants: IApplicant[];
}

const JobData: IJob = {
  id: uuidv4(),
  title: "Software Engineer, Front End",
  company: "Peerlist",
  postedAt: new Date("2024-01-05"),
  location: "Remote (United States, Canada)",
  type: "Full-time",
  postedBy: user.akash,
  applicantCount: 78,
  applicants: [
    {
      id: uuidv4(),
      user: user.ronald,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.esther,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Shortlisted",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.leslie,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.guy,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Rejected",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.cody,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.esther,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Shortlisted",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      id: uuidv4(),
      user: user.esther,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Shortlisted",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
  ],
};

export default JobData;
