import ProjectPage from "../UI/ProjectPage";
import natours1 from "../../public/img/natours1.jpg";
import natours2 from "../../public/img/natours2.jpg";
import natours3 from "../../public/img/natours3.jpg";
import natours4 from "../../public/img/natours4.jpg";
import natours5 from "../../public/img/natours5.jpg";
import natours6 from "../../public/img/natours6.jpg";

function Natours() {
  const images = [natours1, natours2, natours3, natours4, natours5, natours6];
  return (
    <div>
      <ProjectPage
        title="Natours"
        desc="Auroramålet is a youth-led group that is suing the Swedish government in public court because they do not treat the climate crisis as a crisis. Aurora states that for us children and young people, the rights to life, health and development guaranteed to us by the European Convention are endangered by the climate crisis. We in Aurora hold the state responsible for their lack of climate action. Through a court process, we are ensuring that the state respects human rights. "
        role="Frontend Developer Intern"
        year="2022"
        images={images}
        link="https://xn--auroramlet-75a.se/"
      />
    </div>
  );
}

export default Natours;
