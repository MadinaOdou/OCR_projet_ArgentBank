import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
