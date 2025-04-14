import styles from './FormModal.module.css';

import DoublyLinkedList from '../../../../helper/data_structure/DoublyLinkedList';
import FormInput from '../FormInput/FormInput';
import { useState, useRef, useEffect } from 'react';

import {
  type ListItemStateType,
  type ListItemStateListItems,
} from '../../types/RecipeCardFormTypes';

type FormModalProps = {
  listItemState: ListItemStateListItems[];
  setListItemState: React.Dispatch<React.SetStateAction<ListItemStateType>>;
};

type FormModalState = {
  [key: string]: {
    id: string;
    position: number;
    prevValue: string;
    currValue: string;
  };
};

const FormModal = ({
  ref,
  listItemState,
  setListItemState,
}: FormModalProps) => {
  // will take Listitemstate and render inputs for each state element
  // needs state to control form
  // needs btn to update formstate and close modal?
  //  needs to rearrange order ***** will need to change listItem satte and add order key + id
  // list item state needs to change to a object each with id

  const [formModalStateDLL, setFormModalStateDLL] = useState(
    new DoublyLinkedList()
  );

  console.log(formModalStateDLL);

  const [formModalState, setFormModalState] = useState(() => {
    const stateObject: FormModalState = {};

    listItemState.forEach((el, index) => {
      stateObject[el.id] = {
        id: el.id,
        position: el.position,
        prevValue: el.content,
        currValue: el.content,
      };
    });
    console.log(stateObject);
    return stateObject;
  });

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.showModal();
    }
  }, []);

  const modalRef = useRef();

  const renderComponent = (Component:<i>) => {
    if (!state.head || !state.tail) {
      return undefined;
    }

    const arr = [];
    let temp = state.head;

    while (temp.next) {
      // ?? || temp === state.tail
      arr.push(<Component {...temp} />);
      temp = temp.next;
    }

    arr.push(<Component {...state.tail} />);
    return arr;
  };

  console.log(formModalState);

  const changeInputHandler = (
    key: keyof FormStateType,
    value: string
  ): void => {
    const formModalStateCopy = { ...formModalState };
    formModalStateCopy[key].currValue = value;
    setFormModalState({ ...formModalStateCopy });
  };

  const resetInputHandler = (key) => {
    const formModalStateCopy = { ...formModalState };
    formModalStateCopy[key].currValue = formModalState[key].prevValue;
    setFormModalState({ ...formModalStateCopy });
  };

  const updateInputHandler = (el) => {
    const listItemStateCopy = [...listItemState];
    listItemStateCopy[el] = formModalState[el].currValue;
    setListItemState(listItemStateCopy);
  };

  const moveUpHandler = (id: string) => {
    // 0 USE  DOUBLY LINKED LIST FOR STATE SO POSTIONS CAN BE EASILY SWAPPED

    // 1 get cuur position form state
    const activeElement = document.getElementById(id);
    const activeElementState = formModalState[activeElement?.id];
    console.log(activeElementState);
    // 1b get second element

    // 2 if position === 1 dont show btn or return
    // 3 get list itme placed above current
    // 4 swap both elements need animation
    // 5 update state
    // ??? should update Form.tsx state whenever modal is closed
  };

  return (
    <dialog ref={modalRef} className={styles.formModal}>
      {/* <DoublyLinkedListTest /> */}
      <p>Greetings, one and all!</p>
      <form method="dialog">
        {Object.keys(formModalState).map((el) => {
          console.log(formModalState[el]);
          return (
            <div id={formModalState[el].id}>
              {console.log('rtuenrnrnrnrnrnnrr')}
              {/* <p>{formModalState[el].currValue}</p> */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  moveUpHandler(formModalState[el].id);
                }}
              >
                up
              </button>
              <button>down</button>
              <FormInput
                formInputId={el}
                formInputPlaceholder="test"
                inputValue={formModalState[el].currValue}
                changeInputHandler={changeInputHandler}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateInputHandler(el);
                }}
              >
                save changes
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  resetInputHandler(el);
                }}
              >
                undo changes
              </button>
            </div>
          );
        })}
        <button onClick={(e) => e.preventDefault()}>OK</button>
      </form>
    </dialog>
  );
};

export default FormModal;
