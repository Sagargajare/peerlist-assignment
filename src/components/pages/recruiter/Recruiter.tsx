"use client";
import React from "react";
import JobData, { IJob } from "@/data/job";
import JobInfo from "./JobInfo";

type Props = {
  jobData: IJob;
};

const Recruiter = ({ jobData }: Props) => {
  console.log(jobData);
  return (
    <div>
      <JobInfo />
    </div>
  );
};

export default Recruiter;
