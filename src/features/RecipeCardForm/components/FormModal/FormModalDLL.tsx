import styles from './FormModal.module.css';

import DoublyLinkedList from '../../../../helper/data_structure/DoublyLinkedList';
import FormInput from '../FormInput/FormInput';
import { useState, useRef, useEffect, useReducer } from 'react';
import useTest from '../../../../helper/data_structure/test';
import useDoublyLinkedList from '../../hooks/useDoublyLinkedList';
import FormModalReducer from './FormModal.reducer';

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

const Test = () => {
  return <p>test</p>;
};

const FormModalDLL = ({
  ref,
  listItemState,
  setListItemState,
}: FormModalProps) => {
  // will take Listitemstate and render inputs for each state element
  // needs state to control form
  // needs btn to update formstate and close modal?
  //  needs to rearrange order ***** will need to change listItem satte and add order key + id
  // list item state needs to change to a object each with id

  const [formModalState, setFormModalState] = useState(() => {
    const newDoublyLinkedList = new DoublyLinkedList();

    listItemState.forEach((el) => {
      newDoublyLinkedList.push(el.id, el.position, el.content);
    });
    console.log(newDoublyLinkedList);
    return newDoublyLinkedList;
  });

  console.log(
    'render ***************************************************************************************'
  );

  const [state, dispatch] = useReducer(FormModalReducer, {});

  const testTest = new useTest();

  const renderComponent = (Component) => {
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

  const tc = [<Test />];

  console.log(tc);

  const useDLL = new useDoublyLinkedList();
  console.log(state);

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.showModal();
    }
  }, []);

  const modalRef = useRef();

  console.log(formModalState);

  const changeInputHandler = (id: string, value: string): void => {
    setFormModalState((formModalState.getNodeById(id).currContent = value));
    console.log(formModalState);
  };

  //   const resetInputHandler = (key) => {
  //     const formModalStateCopy = { ...formModalState };

  //     setFormModalState(formModalStateCopy[key].currValue = formModalState[key].prevValue;);
  //   };

  //   const updateInputHandler = (el) => {
  //     const listItemStateCopy = [...listItemState];
  //     listItemStateCopy[el] = formModalState[el].currValue;
  //     setListItemState(listItemStateCopy);
  //   };

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
        <FormInput
          formInputId=":r2:"
          formInputPlaceHolder="test"
          inputValue={formModalState.getNodeById(':r2:').currContent}
          changeInputHandler={changeInputHandler}
        />
        {useDLL.returnDll() ? (
          <p>{Object.keys(useDLL.returnDll())}</p>
        ) : (
          <p>empty</p>
        )}
        {/* {Object.keys(formModalState).map((el) => {
          console.log(formModalState[el]);
          return (
            <div id={formModalState[el].id}>
              {console.log('rtuenrnrnrnrnrnnrr')}
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
        })} */}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'pop' });
            console.log(state);
          }}
        >
          pop
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'push',
              payload: {
                node: { id: 'id-1', position: 1, content: 'this is a node' },
              },
            });
            console.log(state);
          }}
        >
          push
        </button>{' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'push',
              payload: {
                node: { id: 'id-2', position: 2, content: '2 this is a node' },
              },
            });
            console.log(state);
          }}
        >
          push2
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'push',
              payload: {
                node: { id: 'id-3', position: 3, content: '3 this is a node' },
              },
            });
            console.log(state);
          }}
        >
          push3
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'push',
              payload: {
                node: { id: 'id-4', position: 4, content: '4 this is a node' },
              },
            });
            console.log(state);
          }}
        >
          push4
        </button>{' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'shift',
            });
            console.log(state);
          }}
        >
          shift
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'get',
              payload: { index: 3 },
            });
            console.log(state);
          }}
        >
          get
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'update',
              payload: { index: 3, updateContent: 'THIS HAS BEEN UPDATED' },
            });
            console.log(state);
          }}
        >
          update
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'remove',
              payload: { index: 1 },
            });
            console.log(state);
          }}
        >
          update
        </button>
        {''}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'increaseOrder',
              payload: { index: 1 },
            });
            console.log(state);
          }}
        >
          increaseOrder
        </button>
        {''}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'decreaseOrder',
              payload: { index: 3 },
            });
            console.log(state);
          }}
        >
          decreaseOrder
        </button>
        {renderComponent(Test)}
      </form>
    </dialog>
  );
};

export default FormModalDLL;
