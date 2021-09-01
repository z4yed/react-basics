import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.scss";

const Expense = (props) => {
  //   console.log(props.items);

  const [filteredYear, setYear] = useState("2020");

  const filterExpenseHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // console.log(props.items);
  // console.log(filteredExpenses);

  let expensesContent = (
    <h2 className="expenses-fallback">No Expenses Found</h2>
  );
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses?.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.price}
      />
    ));
  }

  return (
    <Card className="expense-container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterExpenseHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expense;
