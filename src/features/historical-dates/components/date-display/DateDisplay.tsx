"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { CategoriesType } from "../../types";

const DateDisplay = ({
  currentCategory,
  categoryType,
  isMobile,
}: {
  currentCategory: CategoriesType;
  categoryType?: string | null;
  isMobile: boolean;
}) => {
  const first = parseInt(currentCategory.events[0]?.date.split("-")[0], 10);
  const last = parseInt(
    currentCategory.events[currentCategory.events.length - 1]?.date.split(
      "-"
    )[0],
    10
  );

  const [firstYear, setFirstYear] = useState(first);
  const [lastYear, setLastYear] = useState(last);

  useEffect(() => {
    gsap.to(
      { val: firstYear },
      {
        val: first,
        duration: 0.6,
        roundProps: "val",
        onUpdate: function () {
          setFirstYear(this.targets()[0].val);
        },
      }
    );
    gsap.to(
      { val: lastYear },
      {
        val: last,
        duration: 0.6,
        roundProps: "val",
        onUpdate: function () {
          setLastYear(this.targets()[0].val);
        },
      }
    );
  }, [first, last, firstYear, lastYear]);

  return (
    <div className={isMobile ? "date-display-mobile" : "date-display"}>
      <span className="first">{!!firstYear && firstYear}</span>
      <span className="last">{!!lastYear && lastYear}</span>
      {isMobile && <div className="title">{categoryType}</div>}
    </div>
  );
};

export default DateDisplay;
