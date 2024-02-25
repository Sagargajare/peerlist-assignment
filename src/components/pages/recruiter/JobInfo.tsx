import React from "react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Icons } from "@/data/icons";
import { IJob } from "@/data/job";

type Props = {
  jobData: IJob;
};

const JobInfo = ({ jobData }: Props) => {
  return (
    <div className="flex flex-col md:flex-row py-10 bg-[#FAFBFC] p-3 border-b border-[#E1E4E8]">
      <div>
        <Image
          src={jobData.companyLogo}
          alt="Peerlist Logo"
          width={56}
          height={56}
        />
      </div>
      <div className="flex flex-col flex-1 p-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <span className="font-inter font-semibold text-lg">
                {jobData.title}
              </span>
              <span className="font-inter font-normal text-sm leading-5 text-[#0D0D0D]">
                at {jobData.company} • {jobData.type} • {jobData.location}
              </span>
            </div>
          </div>
          <div className="mt-4 md:m-0">
            <div className="flex flex-row">
              <IconButton icon={Icons.pencil} />
              <IconButton icon={Icons.share} />
              <IconButton icon={Icons.newtab} />
              <IconButton icon={Icons.menu} />
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-10 flex flex-col md:flex-row justify-between">
          <div className="flex flex-row font-inter font-normal text-[12px] leading-4 text-[#0D0D0D] my-4 md:my-0">
            <div className="pr-4">
              <span className="font-semibold">{jobData.applicantCount}</span>{" "}
              Candidates
            </div>
            <div className="pr-4">
              <span className="font-semibold">{jobData.applicantCount}</span>{" "}
              Applied w/ peerlist
            </div>
            <div className="pr-4">
              <span className="font-semibold">{jobData.viewCount}</span> View
            </div>
          </div>

          <div className="flex flex-row font-inter font-normal text-[12px] items-center leading-4 text-[#0D0D0D]">
            <div>
              Posted <span className="font-semibold">1d ago</span> by
            </div>

            <div className="font-semibold flex flex-row items-center">
              <img
                className="mx-1"
                src="/assets/profile/akash.svg"
                alt="akash"
                width={20}
                height={20}
              />
              <span> Akash Bhadange</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
