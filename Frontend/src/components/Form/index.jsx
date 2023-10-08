import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../redux/slices/signInSlice";
import { getUserData } from "../../redux/slices/userSlice";
import "./index.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let userCredentials = {
        email,
        password,
      };

      // console.log(userCredentials);

      const result = await dispatch(signInUser(userCredentials));
      // console.log(result);

      if (result.payload) {
        setEmail("");
        setPassword("");
        const token = result.payload.body.token;
        await dispatch(getUserData(token));
        navigate("/user");
      }
    } catch (error) {
      console.error("Error in handleSignIn", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="email"
          autoComplete="on"
          required
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="on"
          required
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}

export default Form;
