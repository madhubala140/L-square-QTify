import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbum from "./components/topAlbum/TopAlbum"
import NewAlbum from "./components/newAlbum/NewAlbum";
import "./Layout.css";
const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <HeroSection />
        <TopAlbum />
        <NewAlbum />
        </div>
        );
        }

export default Layout;