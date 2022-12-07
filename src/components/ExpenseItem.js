import "./ExpenseItem.css";

function ExpenseItem(props) {
  // parameter for passing "props"

  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date?.getFullYear();

  //------ dummy data to mimic dynamic data ------//
  // const expenseData = new Date(2021, 2, 28);//creating a date object
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  console.log("Date", props.date);

  return (
    <div className="expense-item">
      {/* <div>{props.date?.toLocaleString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
