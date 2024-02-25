import user, { IUser } from "./user";

export interface IApplicant {
  user: IUser;
  appliedAt: Date;
  experience: string;
  status: "Applied" | "Rejected" | "Shortlisted";
  holdingOffer: boolean;
  NoticePeriod: string;
}

export interface IJob {
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
  title: "Software Engineer, Front End",
  company: "Peerlist",
  postedAt: new Date("2024-01-05"),
  location: "Remote (United States, Canada)",
  type: "Full-time",
  postedBy: user.akash,
  applicantCount: 78,
  applicants: [
    {
      user: user.ronald,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      user: user.esther,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Shortlisted",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      user: user.leslie,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      user: user.guy,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Rejected",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      user: user.cody,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Applied",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
      user: user.esther,
      appliedAt: new Date("2024-01-05"),
      experience: "5 years",
      status: "Shortlisted",
      holdingOffer: false,
      NoticePeriod: "2 months",
    },
    {
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
