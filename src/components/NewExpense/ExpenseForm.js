import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // -------one state object------- //
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // change handler listening for title changes
  const titleChangeHandler = (event) => {
    console.log(event.target.value); //provides a current value for every key stroke
    setEnteredTitle(event.target.value);

    // --when updating state but depending on previous state pass a function with an argument-- //
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  // change handler listening for amount changes
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  //change handler listening for date changes
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents the page from reloading/re-rendering

    // expense data object upon submission
    //new Date parses and reconfigures the date in a certain format
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseDate)
    // call and execute the onSaveExpenseData() and pass in the new user inputs as an argument
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
