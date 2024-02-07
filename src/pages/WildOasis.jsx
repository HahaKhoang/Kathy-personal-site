import ProjectPage from "../UI/ProjectPage";
import wo1 from "../../public/img/wo1.jpg";
import wo2 from "../../public/img/wo2.jpg";
import wo3 from "../../public/img/wo3.jpg";

function WildOasis() {
  const images = [wo1, wo2, wo3];
  return (
    <div>
      <ProjectPage
        title="The Wild Oasis"
        desc="Climate Death Wheel is an interactive web based project inspired by a climate strike sign I made for the Fridays for Future school strikes. It is undeniable that humans have had a significant impact on the climate. The visitor is encouraged to spin the wheel, and add the result of their death to the interactive map at the bottom of the page."
        role="Developer & Designer"
        year="2024"
        images={images}
      />
    </div>
  );
}

export default WildOasis;
