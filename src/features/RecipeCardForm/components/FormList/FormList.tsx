import FormListItem from '../FormListItem/FormListItem';

import { type ListItemStateType } from '../../types/RecipeCardFormTypes';

type FormListProps = {
  listItemState: ListItemStateType;
};

const FormList = ({ listItemState }: FormListProps) => {
  console.log(listItemState);
  return (
    <div>
      {Object.keys(listItemState).map((key) =>
        listItemState[key as keyof ListItemStateType].listItems.length > 0 ? (
          <div>
            <h3>{listItemState[key as keyof ListItemStateType].title}</h3>
            <ul>
              {listItemState[key as keyof ListItemStateType].listItems.map(
                (el) => (
                  <FormListItem formListItemContent={el} />
                )
              )}
            </ul>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FormList;
