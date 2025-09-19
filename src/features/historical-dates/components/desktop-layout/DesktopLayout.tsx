"use client";

import React from "react";
import EventsSlider from "../events-slider/EventsSlider";
import Stepper from "../stepper/Stepper";
import CirclePicker from "../circle-picker/CirclePicker";
import { CategoriesType } from "../../types";
import DateDisplay from "../date-display/DateDisplay";

const DesktopLayout = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoriesType[];
  selectedCategory: number | null;
  setSelectedCategory: (number: number) => void;
}) => {
  const totalCategory = categories.length;

  const currentCategory = categories.find(
    (item: CategoriesType) => item.id === selectedCategory
  ) || { id: -1, type: "Unknown category", events: [] };

  return (
    <div className="desktop-container">
      <h1 className="desktop-title">Исторические даты</h1>
      <DateDisplay
        currentCategory={currentCategory}
        isMobile={false}
      />
      <CirclePicker
        categories={categories}
        selectedCategory={selectedCategory as number}
        setSelectedCategory={setSelectedCategory}
      />
      <Stepper
        selectedCategory={selectedCategory as number}
        setSelectedCategory={setSelectedCategory}
        totalCategory={totalCategory}
        isMobile={false}
      />
      <EventsSlider events={currentCategory.events} isMobile={false} />
    </div>
  );
};

export default DesktopLayout;
