// import Expenseitem from "./components/Expenseitem";
import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMY_DATA = [];
const App = () => {
  const [expenses, setExpenses] = useState(DUMY_DATA);
  fetch()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setExpenses(data);
    });

  const saveExpeseData = (enterdData) => {
    const updateExpense = [enterdData, ...expenses];
    setExpenses(updateExpense);
  };

  return (
    <div>
      <NewExpense onSaveExpeseData={saveExpeseData} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
