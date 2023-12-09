import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";


const Skill = ({title}) => {
  return (
    <div className="flex items-center text-2xl gap-3">
      <BsPatchCheckFill className="text-[#0788FF]" />
      <h1>{ title}</h1>
    </div>
  );
};

export default Skill;