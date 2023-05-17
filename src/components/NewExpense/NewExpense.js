import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //Geting data from child
  const saveExpeseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //sending data to parent App
    props.onSaveExpeseData(expenseData);
  };
  return (
    <div className="new-expense">
      <h1>Enter Expense</h1>
      <ExpenseForm onSaveExpenseData={saveExpeseDataHandler} />
      {/* <a href="../Expenses/Expenseitem">Show Expense</a> */}
    </div>
  );
};

export default NewExpense;
