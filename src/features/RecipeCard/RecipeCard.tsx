import { useState, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';

import styles from './RecipeCard.module.css';

import RecipeCardFront from './components/RecipeCardFront/RecipeCardFront';
import RecipeCardBack from './components/RecipeCardBack/RecipeCardBack';
import RecipeCardBtnContainer from './components/RecipeCardBtnContainer/RecipeCardBtnContainer';
import Button from '../../components/Buttons/Button';

const RecipeCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [rotate, setRotate] = useState<'front' | 'back'>('front');

  const [printCard, setPrintCard] = useState(false);

  const printRef = useRef(null);

  const print = () => {
    console.log(printRef.current);
    let printWindow = window.open('', '', 'height=500, width=500');
    printWindow.document.open();
    printWindow?.document.write(printRef.current.outerHTML);
  };

  // create state to for btn content print front / print back done
  // create print state. remove all coontent exxept btn conatiner and fr bk of card.
  // btn conatiner = print btn trigger print - cancel change print state to resotore preview

  const formState = useMemo(() => {
    const obj = {};
    Object.keys(location.state.formState).forEach(
      (el) => (obj[el] = location.state.formState[el])
    );

    return obj;
  }, [location.state.formState]);

  const listItemState = useMemo(() => {
    const obj = {};
    Object.keys(location.state.listItemState).forEach(
      (el) => (obj[el] = location.state.listItemState[el])
    );

    return obj;
  }, [location.state.formState]);

  console.log(formState);
  console.log(listItemState);

  return (
    <div className={styles.recipecard_container}>
      <RecipeCardBtnContainer rotate={rotate} setRotate={setRotate} />
      <div className={styles.parent}>
        <div
          className={`${styles.parentInner} ${
            rotate === 'back'
              ? styles.parentInner__back
              : styles.parentInner__front
          }`}
          ref={printRef}
        >
          <div className={styles.fr}>
            <RecipeCardFront
              title={formState.title}
              imgUrl={formState.image}
              qrUrl={formState.url}
              ingredients={listItemState.ingredients}
            />
          </div>
          <div className={styles.bk}>
            <RecipeCardBack
              // DEFAULT VALUES FOR TIME IF FORM IS LEFT EMPTY
              // PARSEINT HTML FORM RETURNS A STRING
              serves={formState.serves ? formState.serves : 4}
              prepTimeHour={
                formState.prepTimeHour ? parseInt(formState.prepTimeHour) : 0
              }
              prepTimeMin={
                formState.prepTimeMin ? parseInt(formState.prepTimeMin) : 30
              }
              cookTimeHour={
                formState.cookTimeHour ? parseInt(formState.cookTimeHour) : 1
              }
              cookTimeMin={
                formState.cookTimeMin ? parseInt(formState.cookTimeMin) : 0
              }
              ovenTemp={formState.ovenTemp}
              instructions={listItemState.instructions}
              tips={listItemState.tips}
              qrUrl={formState.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
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
