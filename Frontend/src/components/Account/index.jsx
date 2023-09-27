import { Link } from "react-router-dom";
import "./index.css";

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions">
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  );
}

export default Account;
