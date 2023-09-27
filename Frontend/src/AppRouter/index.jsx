import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import Transactions from "../pages/Transactions";
import User from "../pages/User";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}

export default AppRouter;
