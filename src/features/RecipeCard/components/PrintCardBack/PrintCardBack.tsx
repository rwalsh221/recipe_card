import { useEffect } from 'react';

import RecipeCardBtnContainer from '../RecipeCardBtnContainer/RecipeCardBtnContainer';
import RecipeCardBack from '../RecipeCardBack/RecipeCardBack';

import {
  type FormStateType,
  type ListItemStateType,
} from '../../../../types/globalTypes';

type PrintCardBackProps = {
  recipeCardData: FormStateType & ListItemStateType;
  printCardStateHandler: () => void;
};

const PrintCardBack = ({
  recipeCardData,
  printCardStateHandler,
}: PrintCardBackProps) => {
  //   WILL RUN TWICE IN DEV MODE: REACT STRICTMODE
  useEffect(() => {
    window.print();
  }, []);

  return (
    <>
      <RecipeCardBtnContainer
        buttons={[
          {
            label: `print`,
            action: () => print(),
          },
          {
            label: `cancel print`,
            action: () => {
              printCardStateHandler();
            },
          },
        ]}
      />
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
          recipeCardData.prepTimeMin ? parseInt(recipeCardData.prepTimeMin) : 30
        }
        cookTimeHour={
          recipeCardData.cookTimeHour
            ? parseInt(recipeCardData.cookTimeHour)
            : 1
        }
        cookTimeMin={
          recipeCardData.cookTimeMin ? parseInt(recipeCardData.cookTimeMin) : 0
        }
        ovenTemp={recipeCardData.ovenTemp}
        instructions={recipeCardData.instructions}
        tips={recipeCardData.tips}
        qrUrl={recipeCardData.url}
      />
    </>
  );
};

export default PrintCardBack;
