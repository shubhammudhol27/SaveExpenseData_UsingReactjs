import React from "react";

import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const Expenseitem = (props) => {
  if (
    props.date !== "Invalid Date" &&
    props.title !== "" &&
    props.price !== ""
  ) {
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹ {props.price}</div>
        </div>
        {/* <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={handleClick}>changet title</button> */}
      </Card>
    );
  } else {
    alert("enter the datd first");
  }
  // useState Method
  // const [newTitle, setNewTitle] = useState();
  // const [title, setTitle] = useState(props.title);
  // const handleClick = () => {
  //   setTitle(newTitle);
  // };
  // const changeHandler = (event) => {
  //   setNewTitle(event.target.value);
  // };
};

export default Expenseitem;
