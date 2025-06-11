import { useRef, useState } from 'react';
import styles from './FormInput.module.css';

import {
  animatePlaceHolderBig,
  animatePlaceHolderSmall,
  placeholderStateHandler,
} from '../../../../utils/animateInputPlaceHolder';
import {
  type FormStateType,
  type FormInputId,
} from '../../types/RecipeCardFormTypes';
import { type PlaceHolderStateType } from '../../types/RecipeCardFormTypes';

type FormInputProps = {
  formInputId: FormInputId;
  inputType: 'text' | 'url' | 'number';
  inputPlaceHolder: string;
  inputValue?: string;
  changeInputHandler: (key: keyof FormStateType, value: string) => void;
};

const FormInput = ({
  formInputId,
  inputType,
  inputPlaceHolder,
  inputValue,
  changeInputHandler,
}: FormInputProps) => {
  const formInputRef = useRef(null);
  const labelBig = useRef<HTMLLabelElement>(null);
  const labelSmall = useRef<HTMLLabelElement>(null);

  const [placeholderState, setPlaceHolderState] =
    useState<PlaceHolderStateType>('init');

  return (
    <div className={styles.formInput}>
      <div className={styles.formInput__container}>
        <input
          ref={formInputRef}
          onFocus={() => {
            placeholderStateHandler(inputValue, setPlaceHolderState, 'focus');
          }}
          onBlur={() => {
            placeholderStateHandler(inputValue, setPlaceHolderState, 'blur');
          }}
          onChange={(e) => {
            changeInputHandler(formInputId, e.target.value);
            placeholderStateHandler(inputValue, setPlaceHolderState, 'final');
          }}
          id={formInputId}
          name={formInputId}
          type={inputType}
          value={inputValue}
        />
        <label
          className={animatePlaceHolderBig(
            inputValue,
            placeholderState,
            styles
          )}
          ref={labelBig}
          htmlFor={formInputId}
        >
          {inputPlaceHolder}
        </label>

        <label
          ref={labelSmall}
          className={animatePlaceHolderSmall(
            inputValue,
            placeholderState,
            styles
          )}
          htmlFor={formInputId}
        >
          {inputPlaceHolder}
        </label>
      </div>
    </div>
  );
};

export default FormInput;
