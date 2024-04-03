import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AnimatedRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
