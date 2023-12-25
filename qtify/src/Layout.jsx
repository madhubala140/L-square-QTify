import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import "./Layout.css";

const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <HeroSection />
        </div>
        );
        }

export default Layout;