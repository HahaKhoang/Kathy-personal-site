import ProjectPage from "../UI/ProjectPage";
import til1 from "../../public/img/til1.jpg";
import til2 from "../../public/img/til2.jpg";
import til3 from "../../public/img/til3.jpg";

function TodayILearned() {
  const images = [til1, til2, til3];

  return (
    <div>
      <ProjectPage
        title="Today I learned"
        desc="Auroramålet is a youth-led group that is suing the Swedish government in public court because they do not treat the climate crisis as a crisis. Aurora states that for us children and young people, the rights to life, health and development guaranteed to us by the European Convention are endangered by the climate crisis. We in Aurora hold the state responsible for their lack of climate action. Through a court process, we are ensuring that the state respects human rights. "
        role="Frontend Developer Intern"
        year="2023"
        images={images}
        link="https://xn--auroramlet-75a.se/"
      />
    </div>
  );
}

export default TodayILearned;
