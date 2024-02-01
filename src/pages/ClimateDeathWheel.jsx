import ProjectPage from "../UI/ProjectPage";
import felix from "../../public/img/felix.jpg";
import Header from "../UI/Header";

function ClimateDeathWheel() {
  return (
    <div>
      <Header />
      <ProjectPage title="Climate Death Wheel" img={felix} />
    </div>
  );
}

export default ClimateDeathWheel;
