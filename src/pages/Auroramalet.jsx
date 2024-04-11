import ProjectPage from "../UI/ProjectPage";
import aurora1 from "../assets/images/aurora1.webp";
import aurora2 from "../assets/images/aurora2.webp";
import aurora3 from "../assets/images/aurora3.webp";

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
