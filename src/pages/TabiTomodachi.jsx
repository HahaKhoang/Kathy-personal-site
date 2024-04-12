import ProjectPage from "../UI/ProjectPage";
import tabi1 from "../assets/images/tabi1.webp";
import tabi2 from "../assets/images/tabi2.webp";
import tabi3 from "../assets/images/tabi3.webp";
import tabi4 from "../assets/images/tabi4.webp";
import tabi5 from "../assets/images/tabi5.webp";
import tabi6 from "../assets/images/tabi6.webp";
import tabi7 from "../assets/images/tabi7.webp";
import tabi8 from "../assets/images/tabi8.webp";
import tabi9 from "../assets/images/tabi9.webp";
import tabi10 from "../assets/images/tabi10.webp";
import tabi11 from "../assets/images/tabi11.webp";
import tabi12 from "../assets/images/tabi12.webp";

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
        link="https://tabi-tomodachi.com/"
      />
    </div>
  );
}

export default TabiTomodachi;
