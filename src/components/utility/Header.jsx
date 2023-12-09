import React from "react";

const Header = ({ main, header, title }) => {
  return (
    <div className="text-center pt-10 pb-10">
      <h3 className="text-4xl font-bold">
        {main} <span className="text-[#0788FF]">{header}</span>
      </h3>
      <p className="text-white mt-3 text-lg">{title}</p>
    </div>
  );
};

export default Header;
