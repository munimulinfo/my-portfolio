import React, { useState, useEffect } from "react";

const Wish = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 12 && currentHour < 14) {
      setTimeOfDay("noon");
    } else if (currentHour >= 14 && currentHour < 17) {
      setTimeOfDay("afternoon");
    } else if (currentHour >= 17 && currentHour < 20) {
      setTimeOfDay("evening");
    } else if (currentHour >= 20 || currentHour < 5) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("morning");
    }
  }, []);

  return (
    <h1 className="md:text-3xl text-xl font-bold md:pb-6 pb-3 mt-10 md:mt-0 text-[#800080]">
      Good {timeOfDay}!
    </h1>
  );
};

export default Wish;
