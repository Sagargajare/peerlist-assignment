import Recruiter from "@/components/pages/recruiter/Recruiter";
import JobData from "@/data/Job";

export default function Home() {
  const jobData = JobData;
  return <Recruiter jobData={jobData} />;
}
