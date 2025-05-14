import { useLocation } from 'react-router';

import Styles from './RecipeCard.module.css';

import RecipeCardFront from './components/RecipeCardFront/RecipeCardFront';
import RecipeCardBack from './components/RecipeCardBack/RecipeCardBack';

const RecipeCard = () => {
  const location = useLocation();
  console.log(location);
  // get state from route
  return (
    <div>
      <RecipeCardFront
        title={location.state.formState.title}
        imgUrl={location.state.formState.image}
        qrUrl={location.state.formState.url}
        ingredients={location.state.listItemState.ingredients}
      />
      <RecipeCardBack
        serves={location.state.formState.serves}
        prepTime={location.state.formState.prepTime}
        cookTime={location.state.formState.cookTime}
        ovenTemp={location.state.formState.ovenTemp}
        instructions={location.state.listItemState.instructions}
        tips={location.state.listItemState.tips}
        qrUrl={location.state.formState.url}
      />
      <button>chnage side</button>
      <button>print</button>
      <button>edit</button>
    </div>
  );
};

export default RecipeCard;

// func to remove http://www. from qr url done!!!!
// fucn to add . to end of uinstructions done!!!
// create own list item marker to maintain formatting
// add save recipe to local storage
// add form input to timeings for hour and mins.
