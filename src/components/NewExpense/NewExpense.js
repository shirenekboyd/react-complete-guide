import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //parameter name is arbitrary
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    // calling or executing onAddExpense prop and forward the updated expenseData to App.js
    props.onAddExpense(expenseData)//passing data through the function, lifts state up
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
