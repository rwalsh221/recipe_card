import styles from './FormModal.module.css';

import FormInput from '../FormInput/FormInput';
import { useState, useRef, useEffect } from 'react';

import { type ListItemStateType } from '../../types/RecipeCardFormTypes';

type FormModalProps = {
  listItemState: string[];
  setListItemState: React.Dispatch<React.SetStateAction<ListItemStateType>>;
};

type FormModalState = {
  [key: string]: { prevValue: string; currValue: string };
};

const FormModal = ({
  ref,
  listItemState,
  setListItemState,
}: FormModalProps) => {
  // will take Listitemstate and render inputs for each state element
  // needs state to control form
  // needs btn to update formstate and close modal?
  //  needs to rearrange order ***** will need to change listItem satte and add order key + id
  // list item state needs to change to a object each with id
  const [formModalState, setFormModalState] = useState(() => {
    const stateObject: FormModalState = {};

    listItemState.forEach((el, index) => {
      stateObject[index] = { prevValue: el, currValue: el };
    });
    console.log(stateObject);
    return stateObject;
  });

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.showModal();
    }
  }, []);

  const modalRef = useRef();

  console.log(formModalState);

  const changeInputHandler = (
    key: keyof FormStateType,
    value: string
  ): void => {
    const formModalStateCopy = { ...formModalState };
    formModalStateCopy[key].currValue = value;
    setFormModalState({ ...formModalStateCopy });
  };

  const resetInputHandler = (key) => {
    const formModalStateCopy = { ...formModalState };
    formModalStateCopy[key].currValue = formModalState[key].prevValue;
    setFormModalState({ ...formModalStateCopy });
  };

  let test = { test: { test: 'hello' } };
  test = { ...test, test: { ...test, test: 'hello' } };
  console.log(test);

  const updateInputHandler = (el) => {
    const listItemStateCopy = [...listItemState];
    listItemStateCopy[el] = formModalState[el].currValue;
    setListItemState(listItemStateCopy);
  };

  return (
    <dialog ref={modalRef} className={styles.formModal}>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        {Object.keys(formModalState).map((el) => (
          <>
            <p>{formModalState[el].currValue}</p>
            <FormInput
              formInputId={el}
              formInputPlaceholder="test"
              inputValue={formModalState[el].currValue}
              changeInputHandler={changeInputHandler}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                updateInputHandler(el);
              }}
            >
              save changes
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                resetInputHandler(el);
              }}
            >
              undo changes
            </button>
          </>
        ))}
        <button onClick={(e) => e.preventDefault()}>OK</button>
      </form>
    </dialog>
  );
};

export default FormModal;
