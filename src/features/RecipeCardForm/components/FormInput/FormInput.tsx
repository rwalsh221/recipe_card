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
  return (
    <div>
      <input
        onChange={(e) => {
          changeInputHandler(formInputId, e.target.value);
        }}
        id={formInputId}
        name={formInputId}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
      />
      <label htmlFor={formInputId} />
    </div>
  );
};

export default FormInput;
