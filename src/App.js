import React from "react";
import { Route, Routes } from "react-router-dom";
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowToInstall from "./components/HowToInstall";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/howtoinstall" element={<HowToInstall />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
