import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../../components/Account";
import EditUsername from "../../components/EditUsername";
import { getUserData } from "../../redux/slices/userSlice";
import "./index.css";

function User() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

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
            {userData && userData.firstName} {userData && userData.lastName} !
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
