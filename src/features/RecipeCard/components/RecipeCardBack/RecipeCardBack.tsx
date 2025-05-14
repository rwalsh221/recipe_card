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
  prepTimeHour,
  prepTimeMin,
  cookTimeHour,
  cookTimeMin,
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

  const addFullStop = (str: string) => {
    if (!str.endsWith('.')) {
      return `${str}.`;
    }
    return str;
  };

  const formatTime = (hour, min) => {
    console.log(hour, min);
    if (hour && min) {
      return `${hour > 1 ? `${hour} hours` : `${hour} hour`} ${
        min > 1 ? `${min} mins` : `${min} min`
      }`;
      // return `${hour} hour ${min} minutes`;
    } else if (!min) {
      return `${hour} hour`;
    } else {
      return `${min} minutes`;
    }
  };

  return (
    <div className={styles.recipe_card_back}>
      <div className={styles.recipe_card_back__meta}>
        <ul>
          <li>
            <span>serves:</span>&nbsp;{serves}
          </li>
          <li>
            <span>preparation time:</span>&nbsp;
            {formatTime(prepTimeHour, prepTimeMin)}
          </li>
          <li>
            <span>cooking time:</span>&nbsp;
            {formatTime(cookTimeHour, cookTimeMin)}
          </li>
          <li>
            <span>Total time:</span>&nbsp;
            {formatTime(cookTimeHour + prepTimeHour, cookTimeMin + prepTimeMin)}
          </li>
          {ovenTemp ? (
            <li>
              <span>oven temperature:</span>&nbsp;{ovenTemp}C
            </li>
          ) : null}
        </ul>
      </div>
      <div className={styles.recipe_card_back__instructions}>
        <h3>{instructions.title}:</h3>
        <ul>
          {instructions.listItems.map((el) => (
            <li>
              <span>{addFullStop(el.content)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.recipe_card_back__tips}>
        <h3>{tips.title}:</h3>
        <ul>
          {tips.listItems.map((el) => (
            <li>
              <span>{addFullStop(el.content)}</span>
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
