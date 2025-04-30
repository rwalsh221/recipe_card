import styles from './FormModal.module.css';

import FormModalReducer from './FormModal.reducer';
// import FormInput from '../FormInput/FormInput';
import { useRef, useEffect, useReducer } from 'react';

import {
  type ListItemStateType,
  type ListItemStateListItems,
} from '../../types/RecipeCardFormTypes';

type FormModalProps = {
  listItemState: ListItemStateListItems[];
  setListItemState: React.Dispatch<React.SetStateAction<ListItemStateType>>;
};

const FormModal = ({
  ref,
  listItemState,
  saveListItemChanges,
  closeFormModal,
}: FormModalProps) => {
  const [state, dispatch] = useReducer(FormModalReducer, {
    head: null,
    tail: null,
    length: 0,
  });
  console.log(listItemState);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log('useeueueueuueueeeeeee', listItemState);
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.showModal();
    }

    dispatch({ type: 'init', payload: { initArr: listItemState } });
  }, [listItemState]);

  console.log(listItemState);
  console.log(ref);

  const changeInputHandler = (id: string, value: string): void => {
    dispatch({ type: 'update', payload: { nodeId: id, updateContent: value } });
  };

  // const closeModalHandler = (action: 'save' | 'discard') => {
  //   if (!modalRef) {
  //     return;
  //   }

  //   if (action === 'save') {
  //     modalRef.current?.close();
  //   }
  // };

  const saveAndCloseHandler = () => {
    saveListItemChanges();
    closeFormModal();
  };

  console.log(state);
  console.log(modalRef);
  return (
    <dialog ref={modalRef} className={styles.formModal}>
      <h2>Edit Steps</h2>
      <form method="dialog">
        {state.nodeArr &&
          state.nodeArr.map((el) => {
            return (
              <div id={el.id} className={styles.modal_input_container}>
                <input
                  className={styles.modal_input}
                  id={el.id} // need to change to own input
                  placeholder={el.currContent}
                  value={el.currContent}
                  onChange={(e) => changeInputHandler(el.id, e.target.value)}
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
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // resetInputHandler(el);
                    }}
                  >
                    <img src="src/assets/svg/close-circle-outline.svg" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        <div className={styles.modal_btn_container}>
          <button
            onClick={(e) => {
              e.preventDefault();
              saveAndCloseHandler();
            }}
          >
            Save Changes
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeFormModal();
            }}
          >
            Discard Changes
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default FormModal;
