import { Icons } from "@/data/icons";
import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onChange }: Props) => {
  return (
    <div className="relative m-2 my-4">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <img width={16} height={16} src={Icons.search} alt="search" />
      </span>
      <input
        onChange={onChange}
        type="text"
        className="pl-10 pr-4 w-full focus:outline-none focus:ring-0 placeholder:font-normal placeholder:text-sm placeholder:leading-5"
        placeholder="Search candidates"
      />
    </div>
  );
};

export default Search;
