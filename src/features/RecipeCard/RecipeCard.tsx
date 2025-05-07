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
      <RecipeCardBack />
      <button>chnage side</button>
      <button>print</button>
      <button>edit</button>
    </div>
  );
};

export default RecipeCard;
