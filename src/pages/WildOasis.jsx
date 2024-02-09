import ProjectPage from "../UI/ProjectPage";
import wo1 from "../../public/img/wo1.jpg";
import wo2 from "../../public/img/wo2.jpg";
import wo3 from "../../public/img/wo3.jpg";
import wo4 from "../../public/img/wo4.jpg";

function WildOasis() {
  const images = [wo1, wo2, wo3, wo4];
  return (
    <div>
      <ProjectPage
        title="The Wild Oasis"
        desc="The Wild Oasis is a booking page for a hotel."
        role="Frontend"
        year="2023"
        images={images}
      />
    </div>
  );
}

export default WildOasis;
