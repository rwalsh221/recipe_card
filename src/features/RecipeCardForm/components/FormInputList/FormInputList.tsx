import styles from './FormInputList.module.css';

import {
  type FormStateType,
  type ListItemStateType,
} from '../../types/RecipeCardFormTypes';

type FormInputProps = {
  labelFor: string;
  inputType: 'text' | 'url' | 'number';
  inputPlaceHolder: string;
  inputValue?: string;
  inputName: keyof FormStateType;
  changeInputHandler: (key: keyof FormStateType, value: string) => void;
  addToListItemState?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof ListItemStateType,
    value: string
  ) => void;
};

const FormInputList = ({
  labelFor,
  inputType,
  inputPlaceHolder,
  inputValue,
  inputName,
  changeInputHandler,
  addToListItemState,
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

      {addToListItemState && (
        <button
          onClick={(e) => {
            addToListItemState(e, inputName, inputValue);
          }}
        >
          test
        </button>
      )}
    </div>
  );
};

export default FormInputList;
