import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date("2020-7-14"),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date("2021-2-12") },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date("2021-2-28"),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date("2021-5-12"),
    },
  ];

  // Add attributes (ie title) to the ExpenseItem component in order to pass "props"
  // expenses = object, [0] first element in the array, .title is dot notation grabbing the title key/value

  // pass the array expenses by items prop
  return <Expenses items={expenses} />;
}

export default App;
