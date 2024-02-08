import ProjectPage from "../UI/ProjectPage";
import tabi1 from "../../public/img/tabi1.jpg";
import tabi2 from "../../public/img/tabi2.jpg";
import tabi3 from "../../public/img/tabi3.jpg";
import tabi4 from "../../public/img/tabi4.jpg";
import tabi5 from "../../public/img/tabi5.jpg";
import tabi6 from "../../public/img/tabi6.jpg";
import tabi7 from "../../public/img/tabi7.jpg";
import tabi8 from "../../public/img/tabi8.jpg";
import tabi9 from "../../public/img/tabi9.jpg";
import tabi10 from "../../public/img/tabi10.jpg";
import tabi11 from "../../public/img/tabi11.jpg";
import tabi12 from "../../public/img/tabi12.jpg";

function TabiTomodachi() {
  const images = [
    tabi1,
    tabi2,
    tabi3,
    tabi4,
    tabi5,
    tabi6,
    tabi7,
    tabi8,
    tabi9,
    tabi10,
    tabi11,
    tabi12,
  ];
  return (
    <div>
      <ProjectPage
        title="Tabi Tomodachi"
        desc="Tabi Tomodachi is a travel consultancy website. Clients can seek help in planning their dream vacation. Packages include surprise trips, customized trips, and curated trips."
        role="Developer & Designer"
        year="2024"
        images={images}
        link="https://tabi-tomodachi.netlify.app/"
      />
    </div>
  );
}

export default TabiTomodachi;
