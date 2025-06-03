import recipeOptions from "../recipeOption";
import recipesData from "../recipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeResults() {
  return (
    <section className="section-recipe-results">
      <h2 className="text-center mb-8">輕鬆篩選，找到你的完美調酒</h2>

      <div className="recipe-option-list">
        {Object.entries(recipeOptions).map(([category, options]) => {
          return (
            <div
              className=" recipe-option-item d-flex align-items-center gap-6"
              key={category}
            >
              <h3 className="recipe-option-title">{category}</h3>
              <ul className="recipe-option-values">
                {options.map((option) => (
                  <li className="recipe-option-value" key={option}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="recipe-results-list ">
        {recipesData.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              title_en={recipe.title_en}
              tags={recipe.tags}
              description={recipe.description}
              imgUrl={recipe.imagesUrl[0]}
            />
          );
        })}
      </div>
    </section>
  );
}
