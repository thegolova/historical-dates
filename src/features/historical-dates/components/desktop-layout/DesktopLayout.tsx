"use client";

import React, { useState } from "react";
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
  selectedCategory: number;
  setSelectedCategory: (number: number) => void;
}) => {
  const totalCategory = categories.length;

  const currentCategory = categories.find(
    (item: CategoriesType) => item.id === selectedCategory
  ) || { id: -1, type: "Unknown category", events: [] };

  console.log({
    categories,
    selectedCategory,
    currentCategory,
    totalCategory,
    events: currentCategory.events,
  });

  return (
    <div className="desktop-container">
      <h1 className="desktop-title">Исторические даты</h1>
      <DateDisplay currentCategory={currentCategory}/>
      <CirclePicker
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Stepper
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalCategory={totalCategory}
      />
      <EventsSlider events={currentCategory.events} />
    </div>
  );
};

export default DesktopLayout;
