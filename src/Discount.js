import { useState } from "react";

const Discount = ({
  discount1,
  setDiscount1,
  discount2,
  setDiscount2,

  bill,
}) => {
  return (
    <div className="discount">
      <div className="select-1">
        How did you like the experience?
        <select
          value={discount1}
          onChange={(e) => setDiscount1(Number(e.target.value))}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely Amazing(20%)</option>
        </select>
      </div>
      <div className="select-2">
        How did your friend like the experience?
        <select
          value={discount2}
          onChange={(e) => setDiscount2(Number(e.target.value))}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely Amazing(20%)</option>
        </select>
      </div>
    </div>
  );
};

export default Discount;
