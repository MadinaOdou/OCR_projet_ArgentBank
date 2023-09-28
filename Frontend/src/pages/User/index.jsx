import { useState } from "react";
import Account from "../../components/Account";
import EditUsername from "../../components/EditUsername";
import "./index.css";

function User() {
  const [active, setActive] = useState(false);
  function handleToggle() {
    setActive(!active);
  }

  return (
    <div className="container">
      <main className="main bg-dark">
        <div className={`header ${active ? "nonVisible" : "visible"}`}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button" onClick={handleToggle}>
            Edit Name
          </button>
        </div>
        <div className={active ? "edit-form open" : "edit-form close"}>
          <EditUsername />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
      </main>
    </div>
  );
}

export default User;
