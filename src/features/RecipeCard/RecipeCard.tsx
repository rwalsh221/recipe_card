import { useLocation } from 'react-router';

import Styles from './RecipeCard.module.css';

import RecipeCardFront from './components/RecipeCardFront/RecipeCardFront';
import RecipeCardBack from './components/RecipeCardBack/RecipeCardBack';
import Button from '../../components/Button/Button';

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
        prepTimeHour={location.state.formState.prepTimeHour}
        prepTimeMin={location.state.formState.prepTimeMin}
        cookTimeHour={location.state.formState.cookTimeHour}
        cookTimeMin={location.state.formState.cookTimeMin}
        ovenTemp={location.state.formState.ovenTemp}
        instructions={location.state.listItemState.instructions}
        tips={location.state.listItemState.tips}
        qrUrl={location.state.formState.url}
      />
      <Button content="change side" />
      <Button content="print" />
      <Button content="edit" />
    </div>
  );
};

export default RecipeCard;

// func to remove http://www. from qr url done!!!!
// fucn to add . to end of uinstructions done!!!
// create own list item marker to maintain formatting
// add save recipe to local storage done!!!
// need clear local storage button on form plus reset all state
// add form input to timeings for hour and mins done !!!.
// create button component
// test print
// fix edit list item overflow
