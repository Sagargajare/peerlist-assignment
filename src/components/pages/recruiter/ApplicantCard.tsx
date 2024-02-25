import { Icons } from "@/data/icons";
import user from "@/data/user";
import React from "react";

type Props = {
  name: string;
};

const ApplicantCard = ({ name }: Props) => {
  return (
    <div className="p-4 m-1 max-w-[350px] rounded-lg border border-1 border-[#E1E4E8]">
      <div className="flex flex-row justify-between">
        <div>
          <img
            width={32}
            height={32}
            src={user.esther.image}
            alt={user.esther.name}
          />
        </div>
        <div className="font-inter font-normal text-[10px] text-[#6A737D]">
          Applied 1d ago
        </div>
      </div>
      <div>
        <div className="mt-1 flex items-center">
          <div className="font-inter font-semibold text-md leading-5">
            {name}
          </div>
          <div className="m-1">
            <img src={Icons.verified} alt="verified" />
          </div>
        </div>
        <div>
          <div className="text-xs leading-4 text-[#0D0D0D]">
            Cloud Consultant at Rapid Circle
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-row mt-2">
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Experience
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            1 year
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Holding Offer
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            Yes
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Notice Period
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            Immediate
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col mt-2">
        <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
          Contact
        </div>
        <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
          sggajare360@gmail.com
        </div>
        <div className="font-semibold text-xs leading-4 text-[#0D0D0D] my-1">
          +91 1234567890
        </div>
      </div>

      {/* Rejected */}
      <div className="flex flex-row items-center mt-2">
        <div className="mr-1">
          <img src={Icons.rejected} alt="reject" />
        </div>
        <div className="text-[10px] text-[#6A737D] font-normal">
          Rejected by <span className="font-semibold">Yogini Bende</span> on 5th
          Jan 2024
        </div>
      </div>

      {/* Shortlisted */}
      <div className="flex flex-row items-center mt-2">
        <div className="mr-1">
          <img src={Icons.tick} alt="reject" />
        </div>
        <div className="text-[10px] text-[#6A737D] font-normal">
          Shortlisted by <span className="font-semibold">Yogini Bende</span> on
          5th Jan 2024
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
