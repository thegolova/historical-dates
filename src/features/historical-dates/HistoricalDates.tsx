"use client";

import React, { useEffect, useState } from "react";
import MobileLayout from "./components/mobile-layout/MobileLayout";
import DesktopLayout from "./components/desktop-layout/DesktopLayout";

const HistoricalDates = () => {
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState([]);
  const isMobile = false;
  console.log("dates", dates);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await fetch("/api/historical-dates", {
        headers: { "Content-Type": "application/json" },
      });
      const responseJson = await response.json();
      setDates(responseJson);
      console.log("responseJson", responseJson);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="historical-dates-container">
      {loading && <div> Loading...</div>}
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

export default HistoricalDates;
