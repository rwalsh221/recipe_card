import { useId } from 'react';

import { type ListItemStateType } from '../types/RecipeCardFormTypes';

const useAddToListItemState = () => {};

export default useAddToListItemState;

const addToListItemState = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  key: keyof ListItemStateType,
  id: string
  listItemState,
  formState,
  setListItemState,
  setFormState
) => {
  e.preventDefault();
  const listItemStateCopy = { ...listItemState };
  const listItemArr = listItemStateCopy[key].listItems;

  listItemArr.push({
    id: id,
    position: listItemArr.length,
    content: formState[key],
  });

  // resets input
  const formStateCopy = { ...formState };
  formStateCopy[key] = '';

  setListItemState(listItemStateCopy);
  setFormState(formStateCopy);
};
