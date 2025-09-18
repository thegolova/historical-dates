"use client";

import React from "react";
import MobileLayout from "./components/mobile-layout/MobileLayout";
import DesktopLayout from "./components/desktop-layout/DesktopLayout";

const HistoricalDates = () => {
  const historicalDates = {};
  const isMobile = false;
  return <div className="historical-dates-container">
    {
      isMobile ? (<MobileLayout />) : ( <DesktopLayout />)
    }
  </div>;
};

export default HistoricalDates;
