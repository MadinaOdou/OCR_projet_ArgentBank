import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter";
import { useSelector } from "react-redux";
import "./index.css";

function App() {
  const loggedIn = useSelector((state) => state.signIn.loggedIn || true);

  return (
    <Router>
      {loggedIn ? <Header loggedIn={loggedIn} /> : <Header />}
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
