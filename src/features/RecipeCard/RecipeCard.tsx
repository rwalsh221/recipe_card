import { useState, useMemo } from 'react';
import { useLocation } from 'react-router';

import styles from './RecipeCard.module.css';

import PrintCardPreview from './components/PrintCardPreview/PrintCardPreview';
import PrintCardFront from './components/PrintCardFront/PrintCardFront';
import PrintCardBack from './components/PrintCardBack/PrintCardBack';

import {
  type RotateCardState,
  type PrintCardState,
} from './types/RecipeCardTypes';

import {
  type FormStateType,
  type ListItemStateType,
} from '../../types/globalTypes';

const RecipeCard = () => {
  const location = useLocation();

  const [rotate, setRotate] = useState<RotateCardState>('front');

  const [printCard, setPrintCard] = useState<PrintCardState>('preview');

  const printCardStateHandler = (side?: RotateCardState | undefined) => {
    if (printCard === 'preview' && side) {
      setPrintCard(side);
    } else {
      setPrintCard('preview');
    }
  };

  // recipeCardData simplify's var name when passed as props. UseMemo prevents creating new variable when changing RecipeCard state
  const recipeCardData = useMemo<FormStateType & ListItemStateType>(
    () => ({
      ...location.state.formState,
      ...location.state.listItemState,
    }),

    [location.state.formState, location.state.listItemState]
  );

  if (printCard === 'preview') {
    return (
      <div className={styles.recipecard_container}>
        <PrintCardPreview
          rotate={rotate}
          setRotate={setRotate}
          printCardStateHandler={printCardStateHandler}
          recipeCardData={recipeCardData}
        />
      </div>
    );
  } else if (printCard === 'front') {
    return (
      <div className={styles.recipecard_container}>
        <PrintCardFront
          recipeCardData={recipeCardData}
          printCardStateHandler={printCardStateHandler}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.recipecard_container}>
        <PrintCardBack
          recipeCardData={recipeCardData}
          printCardStateHandler={printCardStateHandler}
        />
      </div>
    );
  }
};

export default RecipeCard;

// func to remove http://www. from qr url done!!!!
// fucn to add . to end of uinstructions done!!!
// create own list item marker to maintain formatting done!!
// add save recipe to local storage done!!!
// need clear local storage button on form plus reset all state done!!!
// add form input to timeings for hour and mins done !!!.
// create button component done!!!!
// test print
// fix edit list item overflow done!!!!
// form validation
// style recipecard page
// footer
// default for serves and cook time prep time done
