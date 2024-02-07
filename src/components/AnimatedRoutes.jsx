import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ClimateDeathWheel from "../pages/ClimateDeathWheel";
import TabiTomodachi from "../pages/TabiTomodachi";
import Auroramalet from "../pages/Auroramalet";
import WildOasis from "../pages/WildOasis";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="climate-death-wheel" element={<ClimateDeathWheel />} />
        <Route path="tabi-tomodachi" element={<TabiTomodachi />} />
        <Route path="auroramalet" element={<Auroramalet />} />
        <Route path="the-wild-oasis" element={<WildOasis />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
