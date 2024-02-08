import ProjectPage from "../UI/ProjectPage";
import tabi1 from "../../public/img/tabi1.jpg";
import tabi2 from "../../public/img/tabi2.jpg";
import tabi3 from "../../public/img/tabi3.jpg";
import tabi4 from "../../public/img/tabi4.jpg";

function TabiTomodachi() {
  const images = [tabi1, tabi2, tabi3, tabi4];
  return (
    <div>
      <ProjectPage
        title="Tabi Tomodachi"
        desc="Tabi Tomodachi is a travel consultancy website. Clients can seek help in planning their dream vacation. Packages include surprise trips, customized trips, and curated trips."
        role="Developer & Designer"
        year="2024"
        images={images}
      />
    </div>
  );
}

export default TabiTomodachi;
