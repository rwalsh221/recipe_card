import { useState } from 'react';
import styles from './FormInputList.module.css';

import {
  animatePlaceHolderBig,
  animatePlaceHolderSmall,
  placeholderStateHandler,
} from '../../../../utils/animateInputPlaceHolder';

import { type FormInputListId } from '../../types/RecipeCardFormTypes';
import { type PlaceHolderStateType } from '../../types/RecipeCardFormTypes';

type FormInputListProps = {
  formInputListId: FormInputListId;
  inputType: 'text';
  inputPlaceHolder: string;
  inputValue: string;
  changeInputHandler: (key: FormInputListId, value: string) => void;
  addToListItemState: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: FormInputListId
  ) => void;
};

const FormInputList = ({
  formInputListId,
  inputType,
  inputPlaceHolder,
  inputValue,
  changeInputHandler,
  addToListItemState,
}: FormInputListProps) => {
  const [placeholderState, setPlaceHolderState] =
    useState<PlaceHolderStateType>('init');

  return (
    <form className={styles.formInputListContainer}>
      <div className={styles.formInputListContainer__inputCtn}>
        <input
          onFocus={() => {
            placeholderStateHandler(inputValue, setPlaceHolderState, 'focus');
          }}
          onBlur={() => {
            placeholderStateHandler(inputValue, setPlaceHolderState, 'blur');
          }}
          onChange={(e) => {
            changeInputHandler(formInputListId, e.target.value);
            placeholderStateHandler(inputValue, setPlaceHolderState, 'final');
          }}
          id={formInputListId}
          name={formInputListId}
          type={inputType}
          value={inputValue}
        />
        <label
          className={animatePlaceHolderBig(
            inputValue,
            placeholderState,
            styles
          )}
          htmlFor={formInputListId}
        >
          {inputPlaceHolder}
        </label>

        <label
          className={animatePlaceHolderSmall(
            inputValue,
            placeholderState,
            styles
          )}
          htmlFor={formInputListId}
        >
          {inputPlaceHolder}
        </label>
        {/* <label htmlFor={formInputListId}>{inputPlaceHolder}</label> */}
      </div>
      <div className={styles.formInputListContainer__btnCtn}>
        <button
          disabled={!inputValue}
          onClick={(e) => {
            console.log('click');
            addToListItemState(e, formInputListId);
          }}
        >
          add
        </button>
      </div>
    </form>
  );
};

export default FormInputList;
