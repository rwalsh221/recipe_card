import styles from './FormInput.module.css';

import { type FormStateType } from '../../types/RecipeCardFormTypes';

type FormInputProps = {
  labelFor: string;
  inputType: 'text' | 'url' | 'number';
  inputPlaceHolder: string;
  inputValue?: string;
  inputName: keyof FormStateType;
  changeInputHandler: (key: keyof FormStateType, value: string) => void;
};

const FormInput = ({
  labelFor,
  inputType,
  inputPlaceHolder,
  inputValue,
  inputName,
  changeInputHandler,
}: FormInputProps) => {
  return (
    <div>
      <input
        onChange={(e) => {
          changeInputHandler(inputName, e.target.value);
        }}
        name={inputName}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
      />
      <label htmlFor={labelFor} />
    </div>
  );
};

export default FormInput;
