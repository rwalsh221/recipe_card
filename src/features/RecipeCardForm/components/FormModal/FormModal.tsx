import styles from './FormModal.module.css';

import FormModalReducer from './FormModal.reducer';
// import DoublyLinkedList from '../../../../helper/data_structure/DoublyLinkedList';
import FormInput from '../FormInput/FormInput';
import { useState, useRef, useEffect, useReducer } from 'react';

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

  // const [formModalStateDLL, setFormModalStateDLL] = useState(
  //   new DoublyLinkedList()
  // );

  // console.log(formModalStateDLL);

  // const [formModalState, setFormModalState] = useState(() => {
  //   const stateObject: FormModalState = {};

  //   listItemState.forEach((el, index) => {
  //     stateObject[el.id] = {
  //       id: el.id,
  //       position: el.position,
  //       prevValue: el.content,
  //       currValue: el.content,
  //     };
  //   });
  //   console.log(stateObject);
  //   return stateObject;
  // });

  const [state, dispatch] = useReducer(FormModalReducer, {});

  useEffect(() => {
    console.log('useeueueueuueueeeeeee');
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.showModal();
    }

    dispatch({ type: 'init', payload: { initArr: listItemState } });
  }, [listItemState]);
  const modalRef = useRef();

  console.log(listItemState);

  // const renderComponent = (Component:<i>) => {
  //   if (!state.head || !state.tail) {
  //     return undefined;
  //   }

  //   const arr = [];
  //   let temp = state.head;

  //   while (temp.next) {
  //     // ?? || temp === state.tail
  //     arr.push(<Component {...temp} />);
  //     temp = temp.next;
  //   }

  //   arr.push(<Component {...state.tail} />);
  //   return arr;
  // };

  const changeInputHandler = (id: string, value: string): void => {
    dispatch({ type: 'update', payload: { nodeId: id, updateContent: value } });
  };

  // const resetInputHandler = (key) => {
  //   const formModalStateCopy = { ...formModalState };
  //   formModalStateCopy[key].currValue = formModalState[key].prevValue;
  //   setFormModalState({ ...formModalStateCopy });
  // };

  // const updateInputHandler = (el) => {
  //   const listItemStateCopy = [...listItemState];
  //   listItemStateCopy[el] = formModalState[el].currValue;
  //   setListItemState(listItemStateCopy);
  // };

  // const moveUpHandler = (id: string) => {
  //   // 0 USE  DOUBLY LINKED LIST FOR STATE SO POSTIONS CAN BE EASILY SWAPPED

  //   // 1 get cuur position form state
  //   const activeElement = document.getElementById(id);
  //   const activeElementState = formModalState[activeElement?.id];
  //   console.log(activeElementState);
  //   // 1b get second element

  //   // 2 if position === 1 dont show btn or return
  //   // 3 get list itme placed above current
  //   // 4 swap both elements need animation
  //   // 5 update state
  //   // ??? should update Form.tsx state whenever modal is closed
  // };
  console.log(state);
  return (
    <dialog ref={modalRef} className={styles.formModal}>
      <h2>Edit Steps</h2>
      <form method="dialog">
        {state.nodeArr &&
          state.nodeArr.map((el) => {
            return (
              <div id={el.id}>
                <FormInput
                  formInputId={el.id}
                  formInputPlaceholder="test"
                  inputValue={el.currContent}
                  changeInputHandler={changeInputHandler}
                />
                <div className={styles.modal_btn_container}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: 'increaseOrder',
                        payload: { nodeId: el.id },
                      });
                    }}
                  >
                    <img
                      src="src/assets/svg/caret-up-circle-outline.svg"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: 'decreaseOrder',
                        payload: { nodeId: el.id },
                      });
                    }}
                  >
                    <img
                      src="src/assets/svg/caret-down-circle-outline.svg"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // resetInputHandler(el);
                    }}
                  >
                    <img
                      src="src/assets/svg/arrow-undo-circle-outline.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            );
          })}
        <div className={styles.modal_btn_container}>
          <button onClick={(e) => e.preventDefault()}>Save Changes</button>
          <button onClick={(e) => e.preventDefault()}>Discard Changes</button>
        </div>
      </form>
    </dialog>
  );
};

export default FormModal;
