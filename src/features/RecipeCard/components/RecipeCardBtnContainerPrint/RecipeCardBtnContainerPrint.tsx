import styles from './RecipeCardBtnContainer.module.css';

import Button from '../../../../components/Buttons/Button';

type RecipeCardBtnContainerProps = {
  rotate: 'front' | 'back';
  setRotate: React.Dispatch<React.SetStateAction<'front' | 'back'>>;
};

const RecipeCardBtnContainer = ({
  rotate,
  setRotate,
}: RecipeCardBtnContainerProps) => (
  <div className={styles.recipecard__btnContainer}>
    <Button
      content="change side"
      onclick={() => {
        if (rotate === 'front') {
          setRotate('back');
        } else {
          setRotate('front');
        }
      }}
    />
    <Button
      content={`print ${rotate}`}
      onclick={() => {
        print();
      }}
    />
    <Button
      content="edit"
      onclick={() => {
        navigate('/');
      }}
    />
    <Button
      content="Print test"
      onclick={() => {
        window.print();
        // setTestBtn(false);
      }}
    />
  </div>
);

export default RecipeCardBtnContainer;
