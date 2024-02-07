import HomepageContainer from "../UI/HomepageContainer";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomepageContainer />
      </motion.div>
    </>
  );
}

export default Homepage;
