"use client";

import React from "react";
import { CategoriesType } from "../../types";
import DateDisplay from "../date-display/DateDisplay";

const MobileLayout = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoriesType[];
  selectedCategory: number;
  setSelectedCategory: (number: number) => void;
}) => {
  const currentCategory = categories.find(
    (item: CategoriesType) => item.id === selectedCategory
  ) || { id: -1, type: "Unknown category", events: [] };

  return (
    <div className="mobile-container">
      <h1 className="mobile-title">Исторические даты</h1>
      <DateDisplay currentCategory={currentCategory} isMobile/>
    </div>
  );
};

export default MobileLayout;
