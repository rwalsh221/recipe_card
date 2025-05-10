import styles from './RecipeCardBack.module.css';

type RecipeCardBackProps = {
  serves: string;
  prepTime: string;
  bakingTime: string;
  ovenTemp: string;
  instructions: string[];
  tips: string[];
};

const RecipeCardBack = ({
  serves,
  prepTime,
  bakingTime,
  ovenTemp,
  instructions,
  tips,
}: RecipeCardBackProps) => {
  return (
    <div className={styles.recipe_card_back}>
      <div>
        <ul>
          <li>
            <span>serves:</span>&nbsp;{serves}
          </li>
          <li>
            <span>preparation time:</span>&nbsp;{prepTime}
          </li>
          <li>
            <span>baking time:</span>&nbsp;{bakingTime}
          </li>
          <li>
            <span>oven temperature:</span>&nbsp;{ovenTemp}
          </li>
        </ul>
      </div>
      <div>
        <h3>{instructions.title}</h3>
        <ul>
          {instructions.listItems.map((el) => (
            <li>{el.content}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{tips.title}</h3>
        <ul>
          {tips.listItems.map((el) => (
            <li>{el.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCardBack;
