import ProjectPage from "../UI/ProjectPage";
import aurora1 from "../../public/img/aurora1.jpg";
import aurora2 from "../../public/img/aurora2.jpg";
import aurora3 from "../../public/img/aurora3.jpg";

function Auroramalet() {
  const images = [aurora1, aurora2, aurora3];

  return (
    <div>
      <ProjectPage
        title="Auroramålet"
        desc="Auroramålet is a youth-led group that is suing the Swedish government in public court because they do not treat the climate crisis as a crisis. Aurora states that for us children and young people, the rights to life, health and development guaranteed to us by the European Convention are endangered by the climate crisis. We in Aurora hold the state responsible for their lack of climate action. Through a court process, we are ensuring that the state respects human rights. "
        role="Frontend Developer Intern"
        year="2023"
        images={images}
        link="https://xn--auroramlet-75a.se/"
      />
    </div>
  );
}

export default Auroramalet;
