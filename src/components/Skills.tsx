"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Pagination } from "@mui/material";
import styles from "../styles/Skills.module.css";
import { getItems, itemsLength } from "@/utils/getItemsSkillsCarrousel";
import Image from "next/image";

export default function Skills() {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);

  const displayedItems = useMemo(() => getItems(page), [page, getItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => {
        const maxPage = itemsLength();
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

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      setDirection(value > page ? 1 : -1);
    },
    [page]
  );

  return (
    <div className={styles.carrouselContainer}>
      <div className={styles.skillsContainer}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <Image src={item.png} alt={item.text} width={90} height={90} />
            <p className={`${styles.text} lexend-deca`}>{item.text}</p>
          </div>
        ))}
      </div>
      <Pagination
        count={itemsLength()}
        page={page}
        onChange={handlePageChange}
        className={styles.pagination}
        color="primary"
        variant="outlined"
      />
    </div>
  );
}
