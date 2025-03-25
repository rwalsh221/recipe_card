import styles from './FormModal.module.css';

import FormInput from '../FormInput/FormInput';
import { useState } from 'react';

type FormModalProps = {
  listItemState: string[];
};

type FormModalState = {
  [key: string]: string;
};

const FormModal = ({ listItemState }: FormModalProps) => {
  // will take Listitemstate and render inputs for each state element
  // needs state to control form
  // needs btn to update formstate and close modal?
  //   needs to rearrange order
  // list item state needs to change to a object each with id
  const [formModalState, setFormModalState] = useState(() => {
    const stateObject: FormModalState = {};

    listItemState.forEach((el, index) => {
      stateObject[index] = el;
    });

    return stateObject;
  });

  console.log(formModalState);

  return (
    <dialog open className={styles.formModal}>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        {listItemState.map((el) => (
          <FormInput
            formInputId="cookTime"
            formInputPlaceholder="test"
            inputValue={el}
          />
        ))}
        <button onClick={(e) => e.preventDefault()}>OK</button>
      </form>
    </dialog>
  );
};

export default FormModal;
