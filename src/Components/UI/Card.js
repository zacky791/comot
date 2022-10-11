import "./Card.css";

function Card(props) {
  // const test1 = "cards";
  //const test2 = props.className;
  const classes = "cards " + props.className; //Expense item css
  // const classes = {`${test1} + ${test2}`}; //Using template litteral but fail
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// "cards" =.cards {
//   border-radius: 12px;
//   box-shadow: 0 1px 8px rgba(0, 0, 0.25);
// }

// .expense-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.5rem;
//   margin: 1rem 0;
//   background-color: #4b4b4b;
// }
// classes gabungan css 'cards'+'expense-item'
