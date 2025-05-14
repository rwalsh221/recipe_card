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
  cookTime,
  ovenTemp,
  instructions,
  tips,
  qrUrl,
}: RecipeCardBackProps) => {
  const formatUrl = (url: string) => {
    let formattedUrl;
    if (url.includes('https://')) {
      formattedUrl = url.replace('https://', '');
    } else if (url.includes('http://')) {
      formattedUrl = url.replace('http://', '');
    }

    if (formattedUrl?.slice(0, 4) === 'www.') {
      formattedUrl = formattedUrl.replace('www.', '');
    }

    return formattedUrl;
  };

  return (
    <div className={styles.recipe_card_back}>
      <div className={styles.recipe_card_back__meta}>
        <ul>
          <li>
            <span>serves:</span>&nbsp;{serves}
          </li>
          <li>
            <span>preparation time:</span>&nbsp;{prepTime}
          </li>
          <li>
            <span>cooking time:</span>&nbsp;{cookTime}
          </li>
          <li>
            <span>oven temperature:</span>&nbsp;{ovenTemp}
          </li>
        </ul>
      </div>
      <div className={styles.recipe_card_back__instructions}>
        <h3>{instructions.title}:</h3>
        <ul>
          {instructions.listItems.map((el) => (
            <li>
              <span>{el.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.recipe_card_back__tips}>
        <h3>{tips.title}:</h3>
        <ul>
          {tips.listItems.map((el) => (
            <li>
              <span>{el.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.recipe_card_back__footer}>
        <p>{formatUrl(qrUrl)}</p>
      </div>
    </div>
  );
};

export default RecipeCardBack;
