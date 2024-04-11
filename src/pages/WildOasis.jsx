import ProjectPage from "../UI/ProjectPage";
import wo1 from "../assets/images/wo1.webp";
import wo2 from "../assets/images/wo2.webp";
import wo3 from "../assets/images/wo3.webp";
import wo4 from "../assets/images/wo4.webp";

function WildOasis() {
  const images = [wo1, wo2, wo3, wo4];
  return (
    <div>
      <ProjectPage
        title="The Wild Oasis"
        desc="The Wild Oasis is a booking page for a hotel. The user must first log in to view the dashboard for this fictional hotel. React Query was used for fetching data from Supabase."
        role="Developer"
        year="2023"
        images={images}
      />
    </div>
  );
}

export default WildOasis;
