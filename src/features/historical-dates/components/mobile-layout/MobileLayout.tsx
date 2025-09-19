"use client";

import React from "react";
import { CategoriesType } from "../../types";
import DateDisplay from "../date-display/DateDisplay";
import EventsSlider from "../events-slider/EventsSlider";
import Stepper from "../stepper/Stepper";
import DotPagination from "@/shared/components/UI/dot-pagination/DotPagination";

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

  const totalCategory = categories.length;

  return (
    <div className="mobile-container">
      <h1 className="mobile-title">Исторические даты</h1>
      <DateDisplay currentCategory={currentCategory} categoryType={currentCategory.type} isMobile />
      <EventsSlider events={currentCategory.events} isMobile />
      <div className="mobile-controls">
        <Stepper
          selectedCategory={selectedCategory as number}
          setSelectedCategory={setSelectedCategory}
          totalCategory={totalCategory}
          isMobile
        />
        <DotPagination current={selectedCategory} count={totalCategory} />
      </div>
    </div>
  );
};

export default MobileLayout;
