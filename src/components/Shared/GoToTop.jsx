// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const GoToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const GoToTop = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", GoToTop);
//     return () => {
//       window.removeEventListener("scroll", GoToTop);
//     };
//   }, []);

//   return (
//     <button
//       className={`${
//         isVisible ? "block" : "hidden"
//       } fixed bottom-4 right-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-3 rounded-full shadow-lg`}
//       onClick={scrollToTop}
//     >
//       <FaArrowUp />
//     </button>
//   );
// };

// export default GoToTop;


import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const GoToTop = () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const totalScroll = documentHeight - windowHeight;
    const progress = (scrolled / totalScroll) * 100;

    setScrollProgress(progress);

    if (scrolled > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", GoToTop);
    return () => {
      window.removeEventListener("scroll", GoToTop);
    };
  }, []);

  return (
    <div className="fixed  animate-bounce bottom-5 right-5 ">
      <button
        onClick={scrollToTop}
        className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-3 rounded-full shadow-lgrelative ${
          showButton ? "block" : "hidden"
        }`}
      >
        <FaArrowUp />
        <div className="absolute  top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="#0788FF"
              strokeWidth="4"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ScrollTopButton;