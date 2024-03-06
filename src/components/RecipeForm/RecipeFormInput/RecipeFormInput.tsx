import classes from "./RecipeFormInput.module.css";

const RecipeFormInput = ({ valueProps, placeholderProps, onChangeProps }) => {
  return <input value={valueProps} placeholder={placeholderProps} />;
};

export default RecipeFormInput;
