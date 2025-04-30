import styles from './Form.module.css';
import { useState, useRef, useId } from 'react';

import FormInput from '../FormInput/FormInput';
import FormInputList from '../FormInputList/FormInputList';
import FormList from '../FormList/FormList';
import FormModal from '../FormModal/FormModal';
import FormModalDLL from '../FormModal/FormModalDLL';

import {
  type FormStateType,
  type ListItemStateType,
  type ShowFormModalStateType,
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

// type FormProps = {
//   listItemStateProps: ListItemStateType;
//   setListItemStateProps: React.Dispatch<
//     React.SetStateAction<ListItemStateType>
//   >;
// };

const Form = () => {
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

  const [listItemState, setListItemState] = useState<ListItemStateType>({
    ingredients: {
      title: 'ingredients',
      listItems: [],
    },
    instructions: {
      title: 'instructions',
      listItems: [],
    },
    tips: {
      title: 'tips',
      listItems: [],
    },
  });

  const [showFormModalState, setShowFormModalState] =
    useState<ShowFormModalStateType>({
      showModal: false,
      listItemState: null,
    });

  const formRef: React.RefObject<HTMLDialogElement> = useRef();

  console.log(formRef);

  // formRef.current.close();
  // formRef.current.showModal();

  const changeInputHandler = (
    key: keyof FormStateType,
    value: string
  ): void => {
    const formStateCopy = { ...formState };
    formStateCopy[key] = value;
    setFormState({ ...formStateCopy });
  };

  // const addToListItemState = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   key: keyof ListItemStateType
  // ) => {
  //   e.preventDefault();
  //   const listItemStatePropsCopy = { ...listItemStateProps };
  //   const formStateCopy = { ...formState };
  //   listItemStatePropsCopy[key].listItems.push(formStateCopy[key]);
  //   formStateCopy[key] = '';
  //   setListItemStateProps(listItemStatePropsCopy);
  //   setFormState(formStateCopy);
  // };

  const addToListItemState = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof ListItemStateType
  ) => {
    console.log(key);
    e.preventDefault();
    const listItemStateCopy = { ...listItemState };
    const listItemArr = listItemStateCopy[key].listItems;
    const id = `id#${Math.floor((listItemArr.length * 1000) / Math.random())}`;

    listItemArr.push({
      id: id,
      position: listItemArr.length + 1,
      content: formState[key],
    });

    // resets input
    const formStateCopy = { ...formState };
    formStateCopy[key] = '';

    setListItemState(listItemStateCopy);
    setFormState(formStateCopy);
  };

  const testSetFunc = (input) => {
    console.log('clci');
    const listItemStateCopy = { ...listItemState };
    listItemStateCopy.ingredients.listItems = [...input];
    console.log(listItemStateCopy);
    setListItemState({ ...listItemStateCopy });
  };

  const showFormModal = (listItemStateKey: string) => {
    const showFormModalStateCopy = { ...showFormModalState };

    showFormModalStateCopy.showModal = true;
    showFormModalStateCopy.listItemState = listItemStateKey;

    setShowFormModalState({ ...showFormModalStateCopy });
  };

  const closeFormModal = () => {
    const showFormModalStateCopy = { ...showFormModalState };

    showFormModalStateCopy.showModal = false;
    showFormModalStateCopy.listItemState = null;

    setShowFormModalState({ ...showFormModalStateCopy });
  };

  const saveListItemChanges = (key, node) => {
    // console.log(updatedListItems);
    const listItemStateCopy = structuredClone(listItemState);

    const arr = [];

    if (node) {
      let temp: ListItemNodeType | null = node;

      while (temp) {
        arr.push({
          position: temp.position,
          content: temp.currContent,
          id: temp.id,
        });
        temp = temp.next;
      }
    }
    listItemStateCopy[key].listItems = arr;
    // return { ...state, return: dllArray };

    // listItemStateCopy[key].listItems = updatedListItems;
    console.log(listItemStateCopy);

    setListItemState({ ...listItemStateCopy });
    closeFormModal();
  };

  return (
    <>
      {/* when clcik edit on list items need to show modal and pass list item state to it - need show modal state - need useeffect showModal() for backdrop*/}
      {showFormModalState.showModal && showFormModalState.listItemState && (
        <FormModal
          listItemStateKey={showFormModalState.listItemState}
          listItemState={
            listItemState[showFormModalState.listItemState].listItems
          }
          saveListItemChanges={saveListItemChanges}
          closeFormModal={closeFormModal}
        />
      )}
      <div>
        {/* FRONT */}
        <form className={styles.formBasicInfo}>
          <h2 className={styles.formSubHeading}>Basic Information:</h2>
          <div className={styles.formBasicInfo__inputContainer}>
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
          </div>
        </form>
        {/* NEEDS ADD TO ARRAY */}
        {Object.keys(listItemState).map((el) => (
          <div className={styles.formAdditionalInfo__inputContainer}>
            <h2
              className={styles.formSubHeading}
            >{`Add ${listItemState[el].title}:`}</h2>
            <FormInputList
              formInputListId={el}
              changeInputHandler={changeInputHandler}
              addToListItemState={addToListItemState}
              inputPlaceHolder={`add ${listItemState[el].title}`}
              inputValue={formState[el]}
              inputType="text"
            />
            <div className={styles.formListContainer}>
              <FormList
                listItemState={listItemState[el]}
                showModalHandler={showFormModal}
              />
            </div>
          </div>
        ))}
        {/* <div className={styles.formAdditionalInfo__inputContainer}>
          <h2 className={styles.formSubHeading}>Add Ingredients:</h2>
          <FormInputList
            formInputListId="ingredients"
            changeInputHandler={changeInputHandler}
            addToListItemState={addToListItemState}
            inputPlaceHolder="add ingredient"
            inputValue={formState.ingredients}
            inputType="text"
          />
          <div className={styles.formListContainer}>
            <FormList
              listItemState={listItemState.ingredients}
              showModalHandler={showFormModal}
            />
          </div>
        </div>
        <div className={styles.formAdditionalInfo}>
          <div className={styles.formAdditionalInfo__inputContainer}>
            <h2 className={styles.formSubHeading}>Add Instructions:</h2>
            <FormInputList
              formInputListId="instructions"
              changeInputHandler={changeInputHandler}
              addToListItemState={addToListItemState}
              inputPlaceHolder="add instruction"
              inputValue={formState.instructions}
              inputType="text"
            />
            <div className={styles.formListContainer}>
              <FormList listItemState={listItemState.instructions} />
            </div>
          </div>
          <div className={styles.formAdditionalInfo__inputContainer}>
            <h2 className={styles.formSubHeading}>Add Tips:</h2>
            <FormInputList
              formInputListId="tips"
              inputPlaceHolder="add tip"
              inputValue={formState.tips}
              inputType="text"
              changeInputHandler={changeInputHandler}
              addToListItemState={addToListItemState}
            />
            <div className={styles.formListContainer}>
              <FormList listItemState={listItemState.tips} />
            </div>
          </div> */}
        {/* </div> */}
        <button>CREATE CARD</button>
      </div>
    </>
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
