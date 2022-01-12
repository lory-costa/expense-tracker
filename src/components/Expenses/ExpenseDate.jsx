import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-uk", { month: "long" });
  const day = props.date.toLocaleString("en-uk", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='month'>{month}</div>
      <div className='day'>{day}</div>
      <div className='year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
