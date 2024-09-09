"use client"; // Asegura que este componente solo se renderice en el cliente

import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import styles from "../styles/Skills.module.css";
import items from "@/utils/items";
import Image from "next/image";

export default function Skills() {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1); 

  function getItems(page: number) {
    const pageItems = items.find((p) => p.page === page);
    return pageItems ? pageItems.items : [];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const maxPage = items.length; 
      setPage((prevPage) => {
        let newPage = prevPage + direction;
        
        if (newPage > maxPage) {
          newPage = maxPage - 1; 
          setDirection(-1); 
        } else if (newPage < 1) {
          newPage = 2; 
          setDirection(1); 
        }

        return newPage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className={styles.carrouselContainer}>
      <div className={styles.skillsContainer}>
        {getItems(page).map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <Image src={item.png} alt={item.text} width={90} height={90} />
            <p className={`${styles.text} lexend-deca`}>{item.text}</p>
          </div>
        ))}
      </div>
      <Pagination
        count={items.length}
        page={page}
        onChange={handlePageChange}
        className={styles.pagination}
        color="primary"
        variant="outlined"
      />
    </div>
  );
}
