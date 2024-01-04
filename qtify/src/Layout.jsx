import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbum from "./components/topAlbum/TopAlbum"
import NewAlbum from "./components/newAlbum/NewAlbum";
import "./Layout.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Songs from "./components/Songs/Songs";
import Faqs from "./components/Faqs/Faqs";
const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <HeroSection />
        <TopAlbum />
        <NewAlbum />
        <Songs/>
        <AudioPlayer />
        <Faqs />
        </div>
        );
        }

export default Layout;