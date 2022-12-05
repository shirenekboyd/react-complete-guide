import "./ExpenseItem.css";

function ExpenseItem() {
  // dummy data to mimic dynamic data
const expenseData = new Date(2021, 2, 28);//creating a date object
const expenseTitle = "Car Insurance";
const expenseAmount = 294.67;

  return (
    // <h2>Expense item!</h2>
    <div className="expense-item">
      <div className="expense-item_description">{expenseData.toISOString()}</div>
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
