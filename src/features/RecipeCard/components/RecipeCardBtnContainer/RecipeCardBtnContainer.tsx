import styles from './RecipeCardBtnContainer.module.css';

import Button from '../../../../components/Buttons/Button';

type RecipeCardBtnContainerProps = {
  buttons: { label: string; action: () => void }[];
};

const RecipeCardBtnContainer = ({ buttons }: RecipeCardBtnContainerProps) => (
  <div className={styles.recipecard__btnContainer}>
    {buttons.map((el) => (
      <Button key={el.label} content={el.label} onclick={el.action} />
    ))}
  </div>
);

export default RecipeCardBtnContainer;
