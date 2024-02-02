import ProjectPage from "../UI/ProjectPage";
import cdw1 from "../../public/img/cdw1.jpg";
import cdw2 from "../../public/img/cdw2.jpg";
import cdw3 from "../../public/img/cdw3.jpg";
import cdw4 from "../../public/img/cdw4.jpg";
import cdw5 from "../../public/img/cdw5.jpg";

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
      />
    </div>
  );
}

export default ClimateDeathWheel;
