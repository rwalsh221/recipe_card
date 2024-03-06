import RecipeCardFront from "../RecipeCardFront/RecipeCardFront";
import RecipeCardBack from "../RecipeCardBack/RecipeCardBack";
import RecipeForm from "../RecipeForm/RecipeForm";

const AppContainer = () => {
  return (
    <div>
      <RecipeForm />
      <RecipeCardFront />
      <RecipeCardBack />
    </div>
  );
};

export default AppContainer;
