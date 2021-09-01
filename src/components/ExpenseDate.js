import "./ExpenseDate.scss";
import Card from "./Card";

const ExpenseDate = (props) => {
  let month = props.month;
  let day = props.day;
  let year = props.year;

  //   console.log(month, day, year);

  return (
    <Card className="expense-item__date">
      <h4 className="month">{month}</h4>
      <h4 className="day">{day}</h4>
      <h4 className="year">{year}</h4>
    </Card>
  );
};

export default ExpenseDate;
