import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  // parameter for passing "props"
  //  console.log("Date", props.date);

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React!")//shows how many times this component is being evaluated by React

  const clickHandler = () => {
    setTitle("Updated!")//calls component function again when the state changes, assigning a new value, re-evaluates the JSX
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
