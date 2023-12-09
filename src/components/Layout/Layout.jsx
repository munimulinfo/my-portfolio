import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";

const Layout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
