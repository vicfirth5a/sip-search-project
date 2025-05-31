import "./home.scss";

import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import RecipeFilterModal from "../components/RecipeFilterModal.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}
