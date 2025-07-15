import styles from './PrintCardPreview.module.css';

import { useNavigate } from 'react-router';

import RecipeCardBtnContainer from '../RecipeCardBtnContainer/RecipeCardBtnContainer';
import RecipeCardFront from '../RecipeCardFront/RecipeCardFront';
import RecipeCardBack from '../RecipeCardBack/RecipeCardBack';

import {
  type ListItemStateType,
  FormStateType,
} from '../../../../types/globalTypes';

import { type RotateCardState } from '../../types/RecipeCardTypes';

type PrintCardPreviewProps = {
  rotate: RotateCardState;
  printCardStateHandler: (side: RotateCardState) => void;
  setRotate: React.Dispatch<React.SetStateAction<RotateCardState>>;
  recipeCardData: ListItemStateType & FormStateType;
};

const PrintCardPreview = ({
  rotate,
  printCardStateHandler,
  setRotate,
  recipeCardData,
}: PrintCardPreviewProps) => {
  const navigate = useNavigate();

  return (
    <>
      <RecipeCardBtnContainer
        buttons={[
          {
            label: `print ${rotate}`,
            action: () => printCardStateHandler(rotate),
          },
          {
            label: `${rotate === 'back' ? 'show front' : 'show back'}`,
            action: () => {
              if (rotate === 'front') {
                setRotate('back');
              } else {
                setRotate('front');
              }
            },
          },
          {
            label: 'edit card',
            action: () => {
              navigate('/');
            },
          },
        ]}
      />
      <div className={styles.print_card_preview}>
        <div
          className={`${styles.print_card_preview__inner} ${
            rotate === 'back'
              ? styles.print_card_preview__inner_back
              : styles.parentInner__front
          }`}
        >
          <div className={styles.print_card_preview__fr}>
            <RecipeCardFront
              title={recipeCardData.title}
              imgUrl={recipeCardData.image}
              qrUrl={recipeCardData.url}
              ingredients={recipeCardData.ingredients}
            />
          </div>
          <div className={styles.print_card_preview__bk}>
            <RecipeCardBack
              // DEFAULT VALUES FOR TIME IF FORM IS LEFT EMPTY
              // PARSEINT HTML FORM RETURNS A STRING
              serves={recipeCardData.serves ? recipeCardData.serves : '4'}
              prepTimeHour={
                recipeCardData.prepTimeHour
                  ? parseInt(recipeCardData.prepTimeHour)
                  : 0
              }
              prepTimeMin={
                recipeCardData.prepTimeMin
                  ? parseInt(recipeCardData.prepTimeMin)
                  : 30
              }
              cookTimeHour={
                recipeCardData.cookTimeHour
                  ? parseInt(recipeCardData.cookTimeHour)
                  : 1
              }
              cookTimeMin={
                recipeCardData.cookTimeMin
                  ? parseInt(recipeCardData.cookTimeMin)
                  : 0
              }
              ovenTemp={recipeCardData.ovenTemp}
              instructions={recipeCardData.instructions}
              tips={recipeCardData.tips}
              qrUrl={recipeCardData.url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintCardPreview;
