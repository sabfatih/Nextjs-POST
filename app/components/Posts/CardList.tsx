import React from "react";

interface IChildren {
  children: React.ReactNode;
}

const CardList = ({ children }: IChildren) => {
  return <div className="bg-teal-400 w-full p-4">{children}</div>;
};

export default CardList;
