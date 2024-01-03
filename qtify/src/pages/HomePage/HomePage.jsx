import React from "react";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./HomePage.css";
import { fetchFilters } from "../../AxiosData/AxiosData";

function HomePage(){
    const { data }=useOutletContext();
    const { topAlbums, newAlbums,songs}=data;
return (
    <>
    
    <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <Section title="Songs" data={songs} 
            filterSource={fetchFilters}    type="song"/>
    </div>
    </>
)

}

export default HomePage;