import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //Filtering the list based on selected year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //if truthy render only items with that selected year else don't
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* mapping the filtered list not original list */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} //each item has a unique id, see dummy expenses in App.js
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
