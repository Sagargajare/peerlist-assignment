"use client";
import React from "react";
import JobData, { IJob } from "@/data/job";
import JobInfo from "./JobInfo";
import ApplicantCard from "./ApplicantCard";
import KanbanBoard from "./KanbanBoard";

type Props = {
  jobData: IJob;
};

const Recruiter = ({ jobData }: Props) => {
  console.log(jobData);
  return (
    <div className="flex flex-col">
      <JobInfo jobData={jobData} />

      <KanbanBoard applicant={jobData.applicants} />
    </div>
  );
};

export default Recruiter;
