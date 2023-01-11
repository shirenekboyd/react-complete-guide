import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpensesList = (props) => {
  //stored jsx content inside a variable
  //checking for an empty list
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //each item has a unique id, see dummy expenses in App.js
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
