import styles from './FormList.module.css';

import FormListItem from '../FormListItem/FormListItem';
import ButtonSmall from '../../../../components/ButtonSmall/ButtonSmall';

import { type ListItemStateObject } from '../../types/RecipeCardFormTypes';

// type FormListProps = {
//   listItemState: ListItemStateType;
// };

type FormListProps = {
  listItemState: ListItemStateObject;
};

const FormList = ({ listItemState, showModalHandler }: FormListProps) => {
  console.log(listItemState);
  // return (
  //   <div>
  //     {Object.keys(listItemState).map((key) =>
  //       listItemState[key as keyof ListItemStateType].listItems.length > 0 ? (
  //         <div>
  //           <h3>{listItemState[key as keyof ListItemStateType].title}</h3>
  //           <ul>
  //             {listItemState[key as keyof ListItemStateType].listItems.map(
  //               (el) => (
  //                 <FormListItem formListItemContent={el} />
  //               )
  //             )}
  //           </ul>
  //         </div>
  //       ) : null
  //     )}
  //   </div>
  // );
  return (
    <div className={styles.formList}>
      <div className={styles.formListHeader}>
        <h3>{listItemState.title}</h3>
        {/* <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            showModalHandler(listItemState.title);
          }}
        >
          edit
        </button> */}
        <ButtonSmall
          content="edit"
          onclick={(e) => {
            e.preventDefault();
            showModalHandler(listItemState.title);
          }}
        />
      </div>
      <ul className={styles.listItemContainer}>
        {/* {Object.keys(listItemState.listItems).map((el) => (
          
        ))} */}
        {listItemState.listItems.map((el) => (
          <FormListItem content={el.content} position={el.position} />
        ))}
        {/* {listItemState.listItems.map((el) => (
          <FormListItem formListItemContent={el} />
        ))} */}
      </ul>
    </div>
  );
};

export default FormList;
