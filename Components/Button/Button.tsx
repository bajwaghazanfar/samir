import React from "react";

type Props = {
  children: React.ReactNode;
};

const DottedButton = ({ children }: Props) => {
  return (
    <button className="w-fit rounded-2xl   bg-violet-200 px-6 py-3  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#913191] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      {children}
    </button>
  );
};

export default DottedButton;
