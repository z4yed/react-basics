import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [inputedTitle, setTitle] = useState("");
  const [inputedPrice, setPrice] = useState("");
  const [inputedDate, setDate] = useState("");

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceInput = (event) => {
    setPrice(event.target.value);
  };
  const handleDateInput = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expense = {
      title: inputedTitle,
      price: inputedPrice,
      date: new Date(inputedDate),
    };

    setTitle("");
    setPrice("");
    setDate("");

    props.onSaveExpenseData(expense);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__info">
        <div className="input-wrapper">
          <label>Title</label>
          <input value={inputedTitle} onChange={handleTitleInput} type="text" />
        </div>
        <div className="input-wrapper">
          <label>Price</label>
          <input
            value={inputedPrice}
            onChange={handlePriceInput}
            type="number"
          />
        </div>
        <div className="input-wrapper">
          <label>Date</label>
          <input
            value={inputedDate}
            type="date"
            onChange={handleDateInput}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
