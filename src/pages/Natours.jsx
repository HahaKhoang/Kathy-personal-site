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
        desc="Natours is a fictional tour booking page. It was developed with an emphasis on design and constructed using HTML/CSS and Sass."
        role="Developer"
        year="2022"
        images={images}
        link="https://natours-kathy.netlify.app/"
      />
    </div>
  );
}

export default Natours;
