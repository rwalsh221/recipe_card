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
    <div className={styles.formInputListContainer}>
      <div className={styles.formInputListContainer__inputCtn}>
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
        {/* <label htmlFor={formInputListId}>{inputPlaceHolder}</label> */}
      </div>
      <div className={styles.formInputListContainer__btnCtn}>
        <button
          disabled={!inputValue}
          onClick={(e) => {
            addToListItemState(e, formInputListId, inputValue);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default FormInputList;
