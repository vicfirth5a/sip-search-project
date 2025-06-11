import recipesData from '../recipesData'
import "./RecipeContent.scss";
import Navbar from "../components/Navbar";
// import recipesData from "../recipesData";

export default function RecipeContent() {
  return (
    <>
      <Navbar></Navbar>
      <section className="section-recipe-content">
        <div className="titles d-flex 
        justify-content-center">
          <h2>{recipesData[0].title_en}</h2>
          <h2>{recipesData[0].title}</h2>
        </div>
        
        <div className='recipe-content-details'>
          <div className="recipe-pic">
            <img src={recipesData[0].imagesUrl[0]}></img>
          </div>
          <div className="recipe-txt">
            <ul className="tag-list">
              {recipesData[0].tags.map(tag=>(<li key={tag} className='tag-item'>{tag}</li>))}
            </ul>
            <p className='recipe-description'>
              {recipesData[0].description}
            </p>

            <div className='recipe-practice'>
              <h3>調酒作法</h3>
              <div className='main-content'>
                <div>
                  <h4>材料比例</h4>
                  <ul className='recipe-practice-ingredients'>
                  {recipesData[0].ingredients.map(ingredient=>(<li key={
                    ingredient.ingredient
                  }>{ingredient.ingredient}{ingredient.amount}ml、</li>))}
                </ul>
              </div>

              <div>
                <h4>步驟</h4>
                {recipesData[0].instructions.join("")}
              </div>

              <div>
                <h4>裝飾物</h4>
                <p>{recipesData[0].garnish.join('、')}</p>
              </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
