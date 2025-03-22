import FormInput from '../FormInput/FormInput';
import { useState } from 'react';

import { type FormState } from '../../types/RecipeCardFormTypes';

// type FormState = {
//   title: string;
//   image?: string;
//   ingredients: string;
//   url?: string;
//   serves?: string;
//   prepTime?: string;
//   cookTime?: string;
//   ovenTemp?: string;
//   instructions: string;
//   tips?: string;
// };

type ingredientsState = string[];
type InstructionsState = string[];
type tipState = string[];

const Form = () => {
  const [formState, setFormState] = useState<FormState>({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const changeInputHandler = (key: keyof FormState, value: string): void => {
    console.log(key);
    console.log(value);
    const formStateCopy = { ...formState };
    formStateCopy[key] = value;
    setFormState({ ...formStateCopy });
    console.log(formState);
  };

  return (
    <form>
      {/* FRONT */}
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="title"
        inputPlaceHolder="title"
        inputValue={formState.title}
        inputType="text"
        labelFor="title"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="image"
        inputPlaceHolder="img url"
        inputValue={formState.image}
        inputType="url"
        labelFor="img url"
      />
      {/* NEEDS ADD TO ARRAY */}
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="ingredients"
        inputPlaceHolder="add ingredient"
        inputValue={formState.ingredients}
        inputType="text"
        labelFor="ingredients"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="url"
        inputPlaceHolder="recipe url"
        inputValue={formState.url}
        inputType="text"
        labelFor="url"
      />
      {/* BACK */}
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="serves"
        inputPlaceHolder="serves"
        inputValue={formState.serves}
        inputType="number"
        labelFor="serves"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="prepTime"
        inputPlaceHolder="preperation time"
        inputValue={formState.prepTime}
        inputType="text"
        labelFor="prepTime"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="cookTime"
        inputPlaceHolder="cooking time"
        inputValue={formState.cookTime}
        inputType="text"
        labelFor="cookTime"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="ovenTemp"
        inputPlaceHolder="oven temperature"
        inputValue={formState.ovenTemp}
        inputType="text"
        labelFor="ovenTemp"
      />
      {/* NEEDS ADD TO ARRAY */}
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="instructions"
        inputPlaceHolder="add instruction"
        inputValue={formState.instructions}
        inputType="text"
        labelFor="instructions"
      />
      <FormInput
        changeInputHandler={changeInputHandler}
        inputName="tips"
        inputPlaceHolder="add tip"
        inputValue={formState.tips}
        inputType="text"
        labelFor="tips"
      />
      {/* need FORM SUBMIT */}
    </form>
  );
};

export default Form;

// ***** FRONT
// title
// img
// ingredint list
// qr code for link to website recipe - optional

// ***** BACK
// recipe meta
// instructions
// tips
