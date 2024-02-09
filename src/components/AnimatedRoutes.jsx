import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ClimateDeathWheel from "../pages/ClimateDeathWheel";
import TabiTomodachi from "../pages/TabiTomodachi";
import Auroramalet from "../pages/Auroramalet";
import WildOasis from "../pages/WildOasis";
import TodayILearned from "../pages/TodayILearned";
import Natours from "../pages/Natours";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="climate-death-wheel" element={<ClimateDeathWheel />} />
        <Route path="tabi-tomodachi" element={<TabiTomodachi />} />
        <Route path="auroramalet" element={<Auroramalet />} />
        <Route path="the-wild-oasis" element={<WildOasis />} />
        <Route path="today-i-learned" element={<TodayILearned />} />
        <Route path="natours" element={<Natours />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
