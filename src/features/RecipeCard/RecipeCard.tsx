import { useLocation, useNavigate } from 'react-router';

import Styles from './RecipeCard.module.css';

import RecipeCardFront from './components/RecipeCardFront/RecipeCardFront';
import RecipeCardBack from './components/RecipeCardBack/RecipeCardBack';
import Button from '../../components/Buttons/Button';

const RecipeCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <RecipeCardFront
        title={location.state.formState.title}
        imgUrl={location.state.formState.image}
        qrUrl={location.state.formState.url}
        ingredients={location.state.listItemState.ingredients}
      />
      <RecipeCardBack
        // DEFAULT VALUES FOR TIME IF FORM IS LEFT EMPTY
        serves={
          location.state.formState.serves ? location.state.formState.serves : 4
        }
        prepTimeHour={
          location.state.formState.prepTimeHour
            ? parseInt(location.state.formState.prepTimeHour)
            : 0
        }
        prepTimeMin={
          location.state.formState.prepTimeMin
            ? parseInt(location.state.formState.prepTimeMin)
            : 30
        }
        cookTimeHour={
          location.state.formState.cookTimeHour
            ? parseInt(location.state.formState.cookTimeHour)
            : 1
        }
        cookTimeMin={
          location.state.formState.cookTimeMin
            ? parseInt(location.state.formState.cookTimeMin)
            : 0
        }
        ovenTemp={location.state.formState.ovenTemp}
        instructions={location.state.listItemState.instructions}
        tips={location.state.listItemState.tips}
        qrUrl={location.state.formState.url}
      />
      <div className={Styles.recipeCard__btnContainer}>
        <Button content="change side" />
        <Button content="print" />
        <Button
          content="edit"
          onclick={() => {
            navigate('/');
          }}
        />
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
