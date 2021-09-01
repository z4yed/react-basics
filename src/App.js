import Expense from "./components/Expense";

function App() {
  const expenseItems = [
    { date: new Date(2021, 4, 11), title: "Note Book", price: 2200 },
    { date: new Date(2021, 3, 13), title: "Laptop", price: 22000 },
    { date: new Date(2021, 2, 17), title: "Scotch Tape", price: 20 },
    { date: new Date(2022, 7, 22), title: "Premium Glass", price: 100 },
  ];
  return <Expense items={expenseItems} />;
}

export default App;
