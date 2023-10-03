import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  signInSelector,
  resetForm,
} from "../../redux/slices/signInSlice";
import "./index.css";

function Form() {
  const dispatch = useDispatch();
  const formData = useSelector(signInSelector);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    }
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erreur !");
        }
      })
      .then((data) => {
        if (data) {
          if (data.token) {
            if (
              data.email === formData.email &&
              data.password === formData.password
            ) {
              localStorage.setItem("token", data.token);
            } else {
              alert("Erreur !!!");
            }
          } else {
            alert("Erreur !!");
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(resetForm());
  };
  return (
    <form onSubmit={hadleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/user">
        <button className="sign-in-button">Sign In</button>
      </Link>
    </form>
  );
}

export default Form;
