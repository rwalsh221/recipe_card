import styles from './index.module.css';
import { useState } from 'react';

import Form from './components/Form/Form';
import FormList from './components/FormList/FormList';

import {
  type FormStateType,
  type ListItemStateType,
} from './types/RecipeCardFormTypes';

const RecipeCardForm = () => {
  const [listItemState, setListItemState] = useState<ListItemStateType>({
    ingredients: [],
    instructions: [],
  });

  return (
    <div className={styles.recipeCardFormContainer}>
      <Form
        listItemStateProps={listItemState}
        setListItemStateProps={setListItemState}
      />
      <FormList />
    </div>
  );
};

export default RecipeCardForm;
