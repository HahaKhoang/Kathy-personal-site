import ProjectPage from "../UI/ProjectPage";
import cdw1 from "../assets/images/cdw1.webp";
import cdw2 from "../assets/images/cdw2.webp";
import cdw3 from "../assets/images/cdw3.webp";
import cdw4 from "../assets/images/cdw4.webp";
import cdw5 from "../assets/images/cdw5.webp";

function ClimateDeathWheel() {
  const images = [cdw1, cdw2, cdw3, cdw4, cdw5];
  return (
    <div>
      <ProjectPage
        title="Climate Death Wheel"
        desc="Climate Death Wheel is an interactive web based project inspired by a climate strike sign I made for the Fridays for Future school strikes. It is undeniable that humans have had a significant impact on the climate. The visitor is encouraged to spin the wheel, and add the result of their death to the interactive map at the bottom of the page."
        role="Developer & Designer"
        year="2023"
        images={images}
        link="https://what-will-be-your-cause-of-death.netlify.app/"
      />
    </div>
  );
}

export default ClimateDeathWheel;
