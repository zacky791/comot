import React from "react";
import ExpenseRender from "../Components/ExpenseRender";

function Home(props) {
  return (
    <div>
      <h2>Let's get started!!!</h2>
      <ExpenseRender items={props.zack} />
    </div>
  );
}

export default Home;
