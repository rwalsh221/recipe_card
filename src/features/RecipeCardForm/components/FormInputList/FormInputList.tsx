import styles from './FormInputList.module.css';

import { type FormInputListId } from '../../types/RecipeCardFormTypes';

type FormInputListProps = {
  formInputListId: FormInputListId;
  inputType: 'text';
  inputPlaceHolder: string;
  inputValue: string;
  changeInputHandler: (key: FormInputListId, value: string) => void;
  addToListItemState: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: FormInputListId,
    value: string
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
  return (
    <div>
      <input
        onChange={(e) => {
          changeInputHandler(formInputListId, e.target.value);
        }}
        id={formInputListId}
        name={formInputListId}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
      />
      <label htmlFor={formInputListId} />

      {addToListItemState && (
        <button
          disabled={!inputValue}
          onClick={(e) => {
            addToListItemState(e, formInputListId, inputValue);
          }}
        >
          test
        </button>
      )}
    </div>
  );
};

export default FormInputList;
