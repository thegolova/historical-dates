import ArrowButton from "@/shared/components/UI/arrow-button/ArrowButton";
import React from "react";

const Stepper = ({
  selectedCategory,
  setSelectedCategory,
  totalCategory,
  isMobile,
}: {
  selectedCategory: number;
  setSelectedCategory: (number: number) => void;
  totalCategory: number;
  isMobile: boolean;
}) => {
  const subStep = () => {
    setSelectedCategory(selectedCategory - 1);
  };

  const addStep = () => {
    setSelectedCategory(selectedCategory + 1);
  };

  //TODO: вынести в утилы форматирование строки
  const formattedSelectedCategory = selectedCategory
    .toString()
    .padStart(2, "0");

  //TODO: вынести в утилы форматирование строки
  const formattedTotalCategory = totalCategory.toString().padStart(2, "0");

  const isDisabledSub = selectedCategory === 1;
  const isDisabledAdd = selectedCategory === totalCategory;

  return (
    <div className={`stepper desktop-content ${isMobile && "stepper-mobile"}`}>
      <div className="stepper-container">
        <div className="title">
          {formattedSelectedCategory}/{formattedTotalCategory}
        </div>
        <div className="buttons">
          <ArrowButton
            position="left"
            onClick={subStep}
            disabled={isDisabledSub}
            isMobile={isMobile}
          />
          <ArrowButton
            position="right"
            onClick={addStep}
            disabled={isDisabledAdd}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
