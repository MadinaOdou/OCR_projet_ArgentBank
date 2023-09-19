import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import "./index.css";

function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
}

export default SignIn;
