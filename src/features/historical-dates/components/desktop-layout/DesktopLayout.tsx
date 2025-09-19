"use client";

import React, { useState } from "react";
import EventsSlider from "../events-slider/EventsSlider";
import Stepper from "../stepper/Stepper";
import CirclePicker from "../circle-picker/CirclePicker";
import { CategoriesType } from "../../types";

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
    <div>
      <h1>Исторические даты</h1>
      <CirclePicker
        list={categories}
        current={selectedCategory}
        onChange={setSelectedCategory}
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
