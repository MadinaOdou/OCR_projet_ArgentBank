import Collapse from "../../components/Collapse";
import "./index.css";

function Transactions() {
  return (
    <div className="container">
      <main className="main">
        <div className="collapse-title">
          <div className="left-titles">
          <p>Date</p>
          <p>Description</p>
          </div>
          <div className="right-titles">
          <p>Amount</p>
          <p>Balance</p>
          </div>
        </div>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </main>
    </div>
  );
}

export default Transactions;
