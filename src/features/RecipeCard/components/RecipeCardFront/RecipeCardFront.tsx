import styles from './RecipeCardFront.module.css';

import { QRCode } from 'react-qrcode-logo';

import { type ListItemStateObject } from '../../../../types/globalTypes';

type RecipeCardFrontProps = {
  title: string;
  imgUrl: string;
  ingredients: ListItemStateObject;
  qrUrl: string;
};

const RecipeCardFront = ({
  title,
  imgUrl,
  ingredients,
  qrUrl,
}: RecipeCardFrontProps) => (
  <div className={styles.recipe_card_front}>
    <div
      className={`${styles.recipe_card_front__section} ${styles.recipe_card_front__title}`}
    >
      <h2>{title}</h2>
    </div>
    <div
      className={`${styles.recipe_card_front__section} ${styles.recipe_card_front__img}`}
    >
      <img src={imgUrl} />
    </div>
    <div
      className={`${styles.recipe_card_front__section} ${styles.recipe_card_front__ingredients}`}
    >
      <h3>{ingredients.title}:</h3>
      <ul>
        {ingredients.listItems.map((el) => (
          <li>{el.content}</li>
        ))}
      </ul>
    </div>
    <div
      className={`${styles.recipe_card_front__section} ${styles.recipe_card_front__qrcode}`}
    >
      <QRCode value={qrUrl} size={100} />
    </div>
  </div>
);

export default RecipeCardFront;
