import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Section.css";
import Card from "./../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";


// ... (previous imports)

export default function Section({ title, data, filterSource, type }) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
    const [selectedFilter, setSelectedFilter] = useState(0);
  
    const handleToggle = () => {
      setCarouselToggle((prevState) => !prevState);
    };
  
    useEffect(() => {
      if (filterSource) {
        filterSource().then((response) => {
          const { data } = response;
          setFilters((prevFilters) => [...prevFilters, ...data]);
        });
      }
    }, [filterSource, filters]);
  
    const cardsToRender = data && Array.isArray(data)
      ? data.filter((card) => {
          console.log("Data:", data);
          console.log("Card:", card);
  
          if (filters.length > 1 && selectedFilter !== 0) {
            if (
              card &&
              card.genre &&
              card.genre.key !== undefined &&
              filters[selectedFilter] &&
              filters[selectedFilter].key !== undefined
            ) {
              return card.genre.key === filters[selectedFilter].key;
            } else {
              console.error("Invalid card or filter data:", card, filters[selectedFilter]);
            }
          }
          return true; // Include all cards if no filter is selected
        })
      : [];
  
    return (
      <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          {filters.length > 1 && (
            <h4 className={styles.toggleText} onClick={handleToggle}>
              {!carouselToggle ? "Collapse All" : "Show All"}
            </h4>
          )}
        </div>
        {filters.length > 1 && (
          <div className={styles.filterWrapper}>
            <Filters
              filters={filters}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        )}
        {cardsToRender.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {cardsToRender.map((ele) => (
                  <Card key={ele.id} data={ele} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={cardsToRender}
                renderComponent={(data) => <Card key={data.id} data={data} type={type} />}
              />
            )}
          </div>
        )}
      </div>
    );
  }
   