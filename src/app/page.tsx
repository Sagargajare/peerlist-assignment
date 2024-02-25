import Recruiter from "@/components/pages/recruiter/Recruiter";
import JobData from "@/data/job";

export default function Home() {
  const jobData = JobData;
  return <Recruiter jobData={jobData} />;
}
