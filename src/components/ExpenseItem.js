import React from "react";

import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  let price = props.price;
  let title = props.title;

  //   console.log(month, day, year);

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__title">
        <h3>{title}</h3>
      </div>
      <Card className="expense-item__price">
        <p>$ {price}</p>
      </Card>
    </Card>
  );
};

export default ExpenseItem;
