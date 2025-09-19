import React from "react";

const Stepper = ({
  selectedCategory,
  setSelectedCategory,
  totalCategory,
}: {
  selectedCategory: number;
  setSelectedCategory: (number: number) => void;
  totalCategory: number;
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
    <div className="stepper desktop-content">
      <div className="stepper-container">
        <div className="stepper-title">
          {formattedSelectedCategory} / {formattedTotalCategory}
        </div>
        <button onClick={subStep} disabled={isDisabledSub}>
          &#60;
        </button>
        <button onClick={addStep} disabled={isDisabledAdd}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Stepper;
