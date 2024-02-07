import AboutContainer from "../components/AboutContainer";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AboutContainer />
      </motion.div>
    </div>
  );
}

export default About;
