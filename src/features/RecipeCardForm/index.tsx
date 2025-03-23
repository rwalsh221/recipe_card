import styles from './index.module.css';
import { useState } from 'react';

import Form from './components/Form/Form';
import FormList from './components/FormList/FormList';

import { type ListItemStateType } from './types/RecipeCardFormTypes';

const RecipeCardForm = () => {
  const [listItemState, setListItemState] = useState<ListItemStateType>({
    ingredients: {
      title: 'ingredients',
      listItems: [],
    },
    instructions: {
      title: 'instructions',
      listItems: [],
    },
    tips: {
      title: 'tips',
      listItems: [],
    },
  });

  return (
    <div className={styles.recipeCardFormContainer}>
      <Form
        listItemStateProps={listItemState}
        setListItemStateProps={setListItemState}
      />
      {/* <FormList listItemState={listItemState} /> */}
    </div>
  );
};

export default RecipeCardForm;
