"use client";

import React, { useState } from "react";
import EventsList from "../events-list/EventsList";
import Stepper from "../stepper/Stepper";
import CirclePicker from "../circle-picker/CirclePicker";

const DesktopLayout = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const totalCategory = categories.length;

  const currentCategory = categories?.find(
    (item) => item.id === selectedCategory
  );

  console.log({
    categories,
    selectedCategory,
    currentCategory,
  });

  return (
    <div>
      <b>DesktopLayout</b>
      <CirclePicker list={categories} current={selectedCategory} onChange={setSelectedCategory} />
      <Stepper
        current={selectedCategory}
        onChange={setSelectedCategory}
        total={totalCategory}
      />
      <EventsList list={currentCategory} />
    </div>
  );
};

export default DesktopLayout;
