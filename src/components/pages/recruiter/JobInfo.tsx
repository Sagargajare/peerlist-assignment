import React from "react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Icons } from "@/data/icons";

type Props = {};

const JobInfo = (props: Props) => {
  return (
    <div className="flex flex-row py-10 bg-[#FAFBFC] p-3 border-b border-[#E1E4E8]">
      <div>
        <Image
          src="assets/logo/companyRounded.svg"
          alt="Peerlist Logo"
          width={56}
          height={56}
        />
      </div>
      <div className="flex flex-col flex-1 p-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <span className="font-inter font-semibold text-lg">
                Software Engineer, Frontend
              </span>
              <span className="font-inter font-normal text-sm leading-5 text-[#0D0D0D]">
                at Peerlist • Full time • Remote (United States, Canada)
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <IconButton icon={Icons.pencil} />
              <IconButton icon={Icons.share} />
              <IconButton icon={Icons.newtab} />
              <IconButton icon={Icons.menu} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-row justify-between">
          <div className="flex flex-row font-inter font-normal text-[12px] leading-4 text-[#0D0D0D]">
            <div className="pr-4">
              <span className="font-semibold">78</span> Candidates
            </div>
            <div className="pr-4">
              <span className="font-semibold">78</span> Applied w/ peerlist
            </div>
            <div className="pr-4">
              <span className="font-semibold">78</span> View
            </div>
          </div>

          <div className="flex flex-row font-inter font-normal text-[12px] leading-4 text-[#0D0D0D]">
            <div>
              Posted <span className="font-semibold">1d ago</span> by
            </div>

            <div className="font-semibold flex flex-row">
              <img
                src="/assets/profile/akash.svg"
                alt="akash"
                width={16}
                height={16}
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
