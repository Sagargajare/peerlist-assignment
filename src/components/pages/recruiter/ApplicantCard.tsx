import { Icons } from "@/data/icons";
import user from "@/data/user";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { IApplicant } from "@/data/job";

type Props = {
  id: string;
  applicant: IApplicant;
};

type ReferralBadgeProps = {
  applicant: IApplicant;
};

const ReferralBadge = ({ applicant }: ReferralBadgeProps) => {
  if (!applicant?.referedBy) return null;

  return (
    <div className="flex flex-row items-center text-[10px] text-[#6A737D] font-normal">
      <span>Ref by</span>
      <div className="m-1">
        <img
          width={16}
          height={16}
          src={applicant.referedBy.image}
          alt="badge"
        />
      </div>
      <span className="font-semibold">{applicant.referedBy.name}</span>
    </div>
  );
};

export const ExternalApplication = ({ id, applicant }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      applicant,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="m-2 p-4 max-w-full md:max-w-[350px] rounded-lg border border-1 border-[#E1E4E8] bg-white"
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <div className="mt-1 flex justify-between">
        <div className="font-inter font-semibold text-md leading-5">
          {applicant.user.name}
        </div>
        <div className="font-inter font-normal text-[10px] text-[#6A737D]">
          Applied 1d ago
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Resume
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            {applicant.user.name}.pdf
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Notice Period
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            {applicant.NoticePeriod}
          </div>
        </div>
      </div>
      {/* Rejected */}
      {applicant.status == "Rejected" && (
        <div className="flex flex-row items-center mt-2">
          <div className="mr-1">
            <img src={Icons.rejected} alt="reject" />
          </div>
          <div className="text-[10px] text-[#6A737D] font-normal">
            Rejected by <span className="font-semibold">Yogini Bende</span> on
            5th Jan 2024
          </div>
        </div>
      )}

      {/* Shortlisted */}
      {applicant.status == "Shortlisted" && (
        <div className="flex flex-row items-center mt-2">
          <div className="mr-1">
            <img src={Icons.tick} alt="accept" />
          </div>
          <div className="text-[10px] text-[#6A737D] font-normal">
            Shortlisted by <span className="font-semibold">Yogini Bende</span>{" "}
            on 5th Jan 2024
          </div>
        </div>
      )}
    </div>
  );
};

const ApplicantCard = ({ id, applicant }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      applicant,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="m-2 p-4 max-w-full md:max-w-[350px] rounded-lg border border-1 border-[#E1E4E8] bg-white"
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <div className="flex flex-row justify-between">
        <div>
          <img
            width={32}
            height={32}
            src={applicant.user.image}
            alt={applicant.user.name}
          />
        </div>
        <div className="flex flex-row items-center">
          <ReferralBadge applicant={applicant} />
          <div className="ml-2 font-inter font-normal text-[10px] text-[#6A737D]">
            Applied 1d ago
          </div>
        </div>
      </div>
      <div>
        <div className="mt-1 flex items-center">
          <div className="font-inter font-semibold text-md leading-5">
            {applicant.user.name}
          </div>
          <div className="m-1">
            <img src={Icons.verified} alt="verified" />
          </div>
        </div>
        <div>
          <div className="text-xs leading-4 text-[#0D0D0D]">
            {applicant.user.jobTitle} at {applicant.user.company}
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
            {applicant.experience}
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Holding Offer
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            {applicant.holdingOffer ? "Yes" : "No"}
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Notice Period
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            {applicant.NoticePeriod}
          </div>
        </div>
      </div>

      {/* Contact */}
      {applicant.status == "Applied" && (
        <div className="flex flex-col mt-2">
          <div className="font-inter font-normal text-[10px] leading-[14px] text-[#6A737D]">
            Contact
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D]">
            {applicant.user.email}
          </div>
          <div className="font-semibold text-xs leading-4 text-[#0D0D0D] my-1">
            {applicant.user.contactNumber}
          </div>
        </div>
      )}

      {/* Rejected */}
      {applicant.status == "Rejected" && (
        <div className="flex flex-row items-center mt-2">
          <div className="mr-1">
            <img src={Icons.rejected} alt="reject" />
          </div>
          <div className="text-[10px] text-[#6A737D] font-normal">
            Rejected by <span className="font-semibold">Yogini Bende</span> on
            5th Jan 2024
          </div>
        </div>
      )}

      {/* Shortlisted */}
      {applicant.status == "Shortlisted" && (
        <div className="flex flex-row items-center mt-2">
          <div className="mr-1">
            <img src={Icons.tick} alt="accept" />
          </div>
          <div className="text-[10px] text-[#6A737D] font-normal">
            Shortlisted by <span className="font-semibold">Yogini Bende</span>{" "}
            on 5th Jan 2024
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantCard;
