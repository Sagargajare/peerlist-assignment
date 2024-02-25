import React from "react";

type Props = {
  icon: string;
};

const IconButton = ({ icon }: Props) => {
  return (
    <button className="rounded-full border border-[#D1D5DA] border-solid hover:shadow-md mx-1">
      <img className="m-1" src={icon} alt="heart" width={15} height={15} />
    </button>
  );
};

export default IconButton;
