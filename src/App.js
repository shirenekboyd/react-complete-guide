import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 29.99,
    date: new Date(2020, 10, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //want to add user inputted expenses to this array with a unique id

  // user data being passed up from child components, added here
  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);

    //update based on the previous state and pass a function as an argument to receive the latest snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Add attributes (ie title) to the ExpenseItem component in order to pass "props"
  // expenses = object, [0] first element in the array, .title is dot notation grabbing the title key/value

  // pass the array expenses by items prop
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
