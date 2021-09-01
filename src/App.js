import React, { useState } from "react";

import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense";

const DEFAULT_EXPENSES = [
  { id: "e1", date: new Date(2021, 4, 11), title: "Note Book", price: 2200 },
  { id: "e2", date: new Date(2021, 3, 13), title: "Laptop", price: 22000 },
  { id: "e3", date: new Date(2021, 2, 17), title: "Scotch Tape", price: 20 },
  {
    id: "e4",
    date: new Date(2022, 7, 22),
    title: "Premium Glass",
    price: 100,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);

  // this funciton is called from NewExpense.js
  const addExpense = (expense) => {
    // setExpenses([expense, ...expenses]); good way

    // better way, if current state depends on previous state
    setExpenses((prevState) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
