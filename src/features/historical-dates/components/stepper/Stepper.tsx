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
    <div className={isMobile ? "stepper-mobile" : "stepper desktop-content"}>
      <div className="stepper-container">
        <div className="title">
          {formattedSelectedCategory}/{formattedTotalCategory}
        </div>
        <div className="buttons">
          <button onClick={subStep} disabled={isDisabledSub}>
            &#60;
          </button>
          <button onClick={addStep} disabled={isDisabledAdd}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
