import ProjectPage from "../UI/ProjectPage";
import natours1 from "../assets/images/natours1.webp";
import natours2 from "../assets/images/natours2.webp";
import natours3 from "../assets/images/natours3.webp";
import natours4 from "../assets/images/natours4.webp";
import natours5 from "../assets/images/natours5.webp";
import natours6 from "../assets/images/natours6.webp";

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
