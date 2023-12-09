import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/routes.jsx';
import { Toaster } from 'react-hot-toast';
import AnimatedCursor from 'react-animated-cursor';
import ReactGA from "react-ga4";

ReactGA.initialize("UA-290635332-1");
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname
  })
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
    <AnimatedCursor
      innerSize={8}
      outerSize={20}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      trailingSpeed={6}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "white",
      }}
      outerStyle={{
        border: "3px solid white",
      }}
    />
  </React.StrictMode>
);