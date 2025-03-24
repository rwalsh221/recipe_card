import FormListItem from '../FormListItem/FormListItem';

import { type ListItemStateObject } from '../../types/RecipeCardFormTypes';

// type FormListProps = {
//   listItemState: ListItemStateType;
// };

type FormListProps = {
  listItemState: ListItemStateObject;
};

const FormList = ({ listItemState }: FormListProps) => {
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
    <div>
      <h3>{listItemState.title}</h3>
      <ul>
        {listItemState.listItems.map((el) => (
          <FormListItem formListItemContent={el} />
        ))}
      </ul>
    </div>
  );
};

export default FormList;
