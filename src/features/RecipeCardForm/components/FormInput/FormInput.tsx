import { useRef, useState, useEffect } from 'react';

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

  // use state instead to handle animation classes
  console.log(inputValue);
  const test2 = inputValue ? true : false;
  console.log(test2);
  const [placeholderState, setPlaceHolderState] = useState(false);

  // setPlaceHolderState(inputValue);
  console.log(placeholderState);

  const aph = (bool: React.SetStateAction<boolean>) => {
    setPlaceHolderState(bool);
  };

  const animatePlaceHolder = () => {
    // if (labelBig.current?.classList.contains(`${styles.labelBig__moveUp}`)) {
    //   labelBig.current?.classList.replace(
    //     `${styles.labelBig__moveUp}`,
    //     `${styles.labelBig__moveDown}`
    //   );
    //   labelSmall.current?.classList.replace(
    //     `${styles.labelSmall__moveUp}`,
    //     `${styles.labelSmall__moveDown}`
    //   );
    // } else if (
    //   labelBig.current?.classList.contains(`${styles.labelBig__moveDown}`)
    // ) {
    //   labelBig.current?.classList.replace(
    //     `${styles.labelBig__moveDown}`,
    //     `${styles.labelBig__moveUp}`
    //   );
    //   labelSmall.current?.classList.replace(
    //     `${styles.labelSmall__moveDown}`,
    //     `${styles.labelSmall__moveUp}`
    //   );
    // } else {
    //   labelBig.current?.classList.add(`${styles.labelBig__moveUp}`);
    //   labelSmall.current?.classList.add(`${styles.labelSmall__moveUp}`);
    // }

    // if inputvalue change state to final

    console.log('anaimate');
    if (inputValue) {
      // finshed state
      console.log(`${styles.labelBig} ${styles.labelBig__up}`);
      return `${styles.labelBig} ${styles.labelBig__up}`;
    } else if (placeholderState) {
      console.log(`${styles.labelBig} ${styles.labelBig__up}`);
      return `${styles.labelBig} ${styles.labelBig__moveUp}`;
      // run animation
    } else if (!placeholderState && inputValue === '') {
      return `${styles.labelBig} ${styles.labelBig__moveDown}`;
    }
  };

  const animatePlaceHolderSmall = () => {
    // if (labelBig.current?.classList.contains(`${styles.labelBig__moveUp}`)) {
    //   labelBig.current?.classList.replace(
    //     `${styles.labelBig__moveUp}`,
    //     `${styles.labelBig__moveDown}`
    //   );
    //   labelSmall.current?.classList.replace(
    //     `${styles.labelSmall__moveUp}`,
    //     `${styles.labelSmall__moveDown}`
    //   );
    // } else if (
    //   labelBig.current?.classList.contains(`${styles.labelBig__moveDown}`)
    // ) {
    //   labelBig.current?.classList.replace(
    //     `${styles.labelBig__moveDown}`,
    //     `${styles.labelBig__moveUp}`
    //   );
    //   labelSmall.current?.classList.replace(
    //     `${styles.labelSmall__moveDown}`,
    //     `${styles.labelSmall__moveUp}`
    //   );
    // } else {
    //   labelBig.current?.classList.add(`${styles.labelBig__moveUp}`);
    //   labelSmall.current?.classList.add(`${styles.labelSmall__moveUp}`);
    // }
    console.log('anaimate');
    if (inputValue || (inputValue && placeholderState)) {
      // finshed state
      console.log(`${styles.labelSmall} ${styles.labelSmall__up}`);
      return `${styles.labelSmall} ${styles.labelSmall__up}`;
    } else if (placeholderState) {
      console.log(`${styles.labelSmall} ${styles.labelSmall__up}`);
      return `${styles.labelSmall} ${styles.labelSmall__moveUp}`;
      // run animation
    } else if (!placeholderState && inputValue === '') {
      return `${styles.labelSmall} ${styles.labelSmall__moveDown}`;
    }
  };
  return (
    <div className={styles.formInput}>
      <div className={styles.formInput__container}>
        <input
          ref={formInputRef}
          onFocus={() => {
            aph(true);
          }}
          onBlur={() => {
            aph(false);
          }}
          onChange={(e) => {
            changeInputHandler(formInputId, e.target.value);
          }}
          id={formInputId}
          name={formInputId}
          type={inputType}
          value={inputValue}
        />
        <label
          className={animatePlaceHolder()}
          ref={labelBig}
          htmlFor={formInputId}
        >
          {inputPlaceHolder}
        </label>

        <label
          ref={labelSmall}
          className={animatePlaceHolderSmall()}
          htmlFor={formInputId}
        >
          {inputPlaceHolder}
        </label>
      </div>
    </div>
  );
};

export default FormInput;
