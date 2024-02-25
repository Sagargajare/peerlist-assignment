"use client";
import React from "react";
import JobData, { IJob } from "@/data/job";
import JobInfo from "./JobInfo";
import ApplicantCard from "./ApplicantCard";

type Props = {
  jobData: IJob;
};

const Recruiter = ({ jobData }: Props) => {
  console.log(jobData);
  return (
    <div className="flex flex-col">
      <JobInfo />
      {jobData.applicants.map((applicant, key) => {
        return <ApplicantCard key={key} name={applicant.user.name} />;
      })}
    </div>
  );
};

export default Recruiter;
