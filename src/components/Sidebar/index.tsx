import { SidebarIcons, Users } from "@/data/icons";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const data = [
  { name: "Scroll", url: "/", icon: SidebarIcons.scroll },
  { name: "Projects", url: "#", icon: SidebarIcons.projects },
  { name: "Inbox", url: "#", icon: SidebarIcons.inbox },
  { name: "Jobs", url: "#", icon: SidebarIcons.jobs },
  { name: "Search", url: "#", icon: SidebarIcons.search },
  { name: "My Network", url: "#", icon: SidebarIcons.network },
];

const SideLink = ({
  name,
  url,
  icon,
}: {
  name: string;
  url: string;
  icon: string;
}) => {
  return (
    <Link href={url} className="flex flex-row p-2.5 items-center group">
      <Image
        width={24}
        height={24}
        src={`${icon}`}
        alt={`${name}`}
        className="text-green-500"
      />
      <span className="font-normal text-base leading-5 ml-2 group-hover:ml-3 transition-all">
        {name}
      </span>
    </Link>
  );
};

const SideBarFooter = () => {
  return (
    <div>
      <div className="text-[10px] font-semibold leading-3">
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          Blog
        </Link>{" "}
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          Help Center
        </Link>{" "}
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          Feedback
        </Link>{" "}
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          Code of Conduct
        </Link>{" "}
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          Privacy
        </Link>{" "}
        &nbsp;•&nbsp;
        <Link href={"#"} className="whitespace-nowrap">
          T&C
        </Link>
      </div>
      <div className="mt-3">
        <span className="text-[10px] leading-3 text-gray-700">
          © 2024 Peerlist Inc.
        </span>
      </div>
    </div>
  );
};

const SideBar = (props: Props) => {
  return (
    <div className="hidden md:flex flex-col max-w-[220px] h-screen sticky top-0 p-1">
      <div className="relative my-3">
        <Image
          src={"/assets/logo/logowithname.svg"}
          alt={"Peerlist"}
          width={"125"}
          height={"32"}
        />
      </div>
      <div className="mt-10 flex flex-col flex-1">
        {data.map((item, index) => {
          return <SideLink {...item} key={index} />;
        })}

        {/* User Profile */}
        <div className="flex flex-row mt-8">
          <div className="flex flex-row p-2.5 items-center group">
            <Image
              width={26}
              height={26}
              src={Users.yogini}
              alt={"Scroll"}
              className="text-green-500"
            />
            <span className="font-normal text-base leading-5 ml-2 group-hover:ml-3 transition-all">
              Yogini
            </span>
          </div>
        </div>

        {/* Loom */}
        <div className="flex flex-row">
          <div className="flex flex-row p-2.5 items-center group">
            <Image
              width={26}
              height={26}
              src={SidebarIcons.loom}
              alt={"Scroll"}
              className="text-green-500"
            />
            <div className="flex flex-col ml-2 group-hover:ml-3 transition-all">
              <span className="font-normal text-base leading-5">Loom</span>
              <span className="text-[10px]">Manage jobs, teams, & more →</span>
            </div>
          </div>
        </div>
      </div>
      <SideBarFooter />
    </div>
  );
};

export default SideBar;
