import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import Homepage from "./pages/Homepage";
import ClimateDeathWheel from "./pages/ClimateDeathWheel";
import TabiTomodachi from "./pages/TabiTomodachi";
import Auroramalet from "./pages/Auroramalet";
import About from "./pages/About";
import WildOasis from "./pages/WildOasis";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

{
  /* <>
<div className={styles.container}>
  <div className={styles["text-container"]}>
    <TextContainer />
  </div>
  <div className={styles["project-container"]}>
    <ProjectContainer />
  </div>
</div>
</> */
}
