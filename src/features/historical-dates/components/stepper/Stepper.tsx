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

  return (
    <div className="stepper">
      <div>
        {selectedCategory} / {totalCategory}
      </div>
      <button onClick={subStep}>&#60;</button>
      <button onClick={addStep}>&gt;</button>
    </div>
  );
};

export default Stepper;
