import React from "react";
import { FaChevronCircleDown, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ title, desc }) => {
  return (
    <div className=" w-64 h-24 px-4  flex items-center gap-4 border border-gray-300 rounded-md">
      {title === "Send us an email" ? (
        <FaChevronCircleDown size={24} />
      ) : (
        <FaPhoneAlt size={24} />
      )}

      <div className=" flex w-full flex-col gap-1.5">
        <p className=" text-gray-700">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Contact;
