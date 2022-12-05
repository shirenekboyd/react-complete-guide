import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    // <h2>Expense item!</h2>
    <div className="expense-item">
      <div className="expense-item_description">March 28th 2021</div>
      <h2>Car Insurance</h2>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
}

export default ExpenseItem;
