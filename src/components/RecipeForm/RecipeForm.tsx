import { useState } from "react";
import RecipeFormInput from "./RecipeFormInput/RecipeFormInput";
import classes from "./RecipeForm.module.css";

const RecipeForm = () => {
  const [formState, setFormState] = useState({
    recipeTitle: null,
  });

  return (
    <div className={classes.recipeFormContainer}>
      <form className={classes.recipeFormFront}>
        <RecipeFormInput placeholderProps={"recipe title"} />
        <RecipeFormInput placeholderProps={"recipe image url"} />
        <RecipeFormInput placeholderProps={"serves"} />
        <RecipeFormInput placeholderProps={"prep time"} />
        <RecipeFormInput placeholderProps={"baking time"} />
        <RecipeFormInput placeholderProps={"oven temp"} />
        {/* INGREDIENTS */}
        <RecipeFormInput placeholderProps={"ingredients subheading"} />
        <RecipeFormInput placeholderProps={"add ingredient"} />
      </form>
      <form className={classes.recipeFormBack}>
        <RecipeFormInput placeholderProps={"add step"} />
      </form>
    </div>
  );
};

export default RecipeForm;
