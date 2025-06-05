import { useRef } from 'react';

import styles from './FormInput.module.css';

import {
  type FormStateType,
  type FormInputId,
} from '../../types/RecipeCardFormTypes';

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
  // need to change id
  // remove placeholder
  // create second label
  // on focus hide first label
  // on focus show second label and move up

  const animatePlaceHolder = () => {
    const labelBigTest = labelBig.current;
    if (labelBigTest) {
      labelBigTest.style.color = 'blue';
    }
  };

  return (
    <div className={styles.formInputContainer}>
      <input
        ref={formInputRef}
        onFocus={() => {
          animatePlaceHolder();
        }}
        onChange={(e) => {
          changeInputHandler(formInputId, e.target.value);
        }}
        id={formInputId}
        name={formInputId}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
      />
      <label
        ref={labelBig}
        className={styles.formInputContainer__label_big}
        htmlFor={formInputId}
      >
        testlabel1
      </label>
      <label
        ref={labelSmall}
        className={styles.formInputContainer__label_small}
        htmlFor={formInputId}
      >
        testlabel2
      </label>
    </div>
  );
};

export default FormInput;
