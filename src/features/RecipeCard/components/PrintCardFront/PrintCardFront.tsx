import { useEffect } from 'react';

import RecipeCardBtnContainer from '../RecipeCardBtnContainer/RecipeCardBtnContainer';
import RecipeCardFront from '../RecipeCardFront/RecipeCardFront';

import {
  type FormStateType,
  type ListItemStateType,
} from '../../../../types/globalTypes';

type PrintCardFrontProps = {
  recipeCardData: FormStateType & ListItemStateType;
  printCardStateHandler: () => void;
};

const PrintCardFront = ({
  recipeCardData,
  printCardStateHandler,
}: PrintCardFrontProps) => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <>
      <RecipeCardBtnContainer
        buttons={[
          {
            label: `print`,
            action: () => window.print(),
          },
          {
            label: `cancel print`,
            action: () => {
              printCardStateHandler();
            },
          },
        ]}
      />
      <RecipeCardFront
        title={recipeCardData.title}
        imgUrl={recipeCardData.image}
        qrUrl={recipeCardData.url}
        ingredients={recipeCardData.ingredients}
      />
    </>
  );
};

export default PrintCardFront;
