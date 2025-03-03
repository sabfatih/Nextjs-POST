"use client";
import React from "react";

interface IViewUserButton {
  userId?: number;
}

const ViewUserButton = ({ userId }: IViewUserButton) => {
  const handleClick = () => alert(userId);

  return (
    <>
      <button onClick={handleClick}>View User</button>
    </>
  );
};

export default ViewUserButton;
