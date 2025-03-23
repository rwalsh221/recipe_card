import FormInput from '../FormInput/FormInput';
import FormInputList from '../FormInputList/FormInputList';
import { useState } from 'react';

import {
  type FormStateType,
  type ListItemStateType,
} from '../../types/RecipeCardFormTypes';

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

type FormProps = {
  listItemStateProps: ListItemStateType;
  setListItemStateProps: React.Dispatch<
    React.SetStateAction<ListItemStateType>
  >;
};

const Form = ({ listItemStateProps, setListItemStateProps }: FormProps) => {
  const [formState, setFormState] = useState<FormStateType>({
    title: '',
    image: '',
    ingredients: '',
    url: '',
    serves: '',
    prepTime: '',
    cookTime: '',
    ovenTemp: '',
    instructions: '',
    tips: '',
  });

  const changeInputHandler = (
    key: keyof FormStateType,
    value: string
  ): void => {
    const formStateCopy = { ...formState };
    formStateCopy[key] = value;
    setFormState({ ...formStateCopy });
  };

  const addToListItemState = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof ListItemStateType
  ) => {
    e.preventDefault();
    const listItemStatePropsCopy = { ...listItemStateProps };
    const formStateCopy = { ...formState };
    listItemStatePropsCopy[key].listItems.push(formStateCopy[key]);
    formStateCopy[key] = '';
    setListItemStateProps(listItemStatePropsCopy);
    setFormState(formStateCopy);
  };

  return (
    <form>
      {/* FRONT */}
      <FormInput
        formInputId="title"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="title"
        inputValue={formState.title}
        inputType="text"
      />
      <FormInput
        formInputId="image"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="img url"
        inputValue={formState.image}
        inputType="url"
      />
      {/* NEEDS ADD TO ARRAY */}
      <FormInputList
        formInputListId="ingredients"
        changeInputHandler={changeInputHandler}
        addToListItemState={addToListItemState}
        inputPlaceHolder="add ingredient"
        inputValue={formState.ingredients}
        inputType="text"
      />
      <FormInput
        formInputId="url"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="recipe url"
        inputValue={formState.url}
        inputType="text"
      />
      {/* BACK */}
      <FormInput
        formInputId="serves"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="serves"
        inputValue={formState.serves}
        inputType="number"
      />
      <FormInput
        formInputId="prepTime"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="preperation time"
        inputValue={formState.prepTime}
        inputType="text"
      />
      <FormInput
        formInputId="cookTime"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="cooking time"
        inputValue={formState.cookTime}
        inputType="text"
      />
      <FormInput
        formInputId="ovenTemp"
        changeInputHandler={changeInputHandler}
        inputPlaceHolder="oven temperature"
        inputValue={formState.ovenTemp}
        inputType="text"
      />
      {/* NEEDS ADD TO ARRAY */}
      <FormInputList
        formInputListId="instructions"
        inputPlaceHolder="add instruction"
        inputValue={formState.instructions}
        inputType="text"
        changeInputHandler={changeInputHandler}
        addToListItemState={addToListItemState}
      />
      {/* LIST???? */}
      <FormInputList
        formInputListId="tips"
        inputPlaceHolder="add tip"
        inputValue={formState.tips}
        inputType="text"
        changeInputHandler={changeInputHandler}
        addToListItemState={addToListItemState}
      />
      <button>CREATE CARD</button>
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
