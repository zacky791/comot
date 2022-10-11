import "./ExpenseDate.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";

const ExpenseRender = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    // First dia kasi new array with data yg sama === filteredYear only
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseRender;
