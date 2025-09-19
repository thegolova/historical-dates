"use client";

import React, { useEffect, useState } from "react";
import MobileLayout from "./components/mobile-layout/MobileLayout";
import DesktopLayout from "./components/desktop-layout/DesktopLayout";
import { CategoriesType } from "./types";

const HistoricalDates = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const isMobile = false;

  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetch("/api/historical-dates", {
        headers: { "Content-Type": "application/json" },
      });
      const responseJson = await response.json();
      setCategories(responseJson.data);
      setLoading(false);
    }
    loadData();
  }, []);

  const layoutProps = {
    categories: categories,
    selectedCategory,
    setSelectedCategory,
  };

  if (loading)
    return (
      <div className="historical-dates-container">
        <div> Loading...</div>
      </div>
    );
  
  return (
    <div className="historical-dates-container">
      {isMobile ? (
        <MobileLayout {...layoutProps}/>
      ) : (
        <DesktopLayout {...layoutProps} />
      )}
    </div>
  );
};

export default HistoricalDates;
