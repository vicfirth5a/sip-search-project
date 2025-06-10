import "./RecipeContent.scss";
import Navbar from "../components/Navbar";

export default function RecipeContent() {
  return (
    <>
      <Navbar></Navbar>
      <section className="section-recipe-content">
        <h2>酒譜的標題</h2>
        <div>
          <div className="recipe-pic">
            <img></img>
          </div>
          <div className="recipe-txt"></div>
        </div>
      </section>
    </>
  );
}
