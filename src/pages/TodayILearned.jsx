import ProjectPage from "../UI/ProjectPage";
import til1 from "../assets/images/til1.webp";
import til2 from "../assets/images/til2.webp";
import til3 from "../assets/images/til3.webp";

function TodayILearned() {
  const images = [til1, til2, til3];

  return (
    <div>
      <ProjectPage
        title="Today I learned"
        desc="Today I learned is a project where users can learn and share facts. It is a simple full stack project using Supabase as the database."
        role="Developer"
        year="2023"
        images={images}
        link="https://today-i-learned-kathy.netlify.app/"
      />
    </div>
  );
}

export default TodayILearned;
