import React from "react";

import "./Expenses.css";
import Expenseitem from "./Expenseitem";

import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <h1 className="Heading">Display Expenses</h1>
      {props.item.map((expense) => (
        <Expenseitem
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
      {/* <Expenseitem
        date={props.item[0].date}
        title={props.item[0].title}
        price={props.item[0].price}
      />
      <Expenseitem
        date={props.item[1].date}
        title={props.item[1].title}
        price={props.item[1].price}
      />
      <Expenseitem
        date={props.item[2].date}
        title={props.item[2].title}
        price={props.item[2].price}
      /> */}
    </Card>
  );
};

export default Expenses;
