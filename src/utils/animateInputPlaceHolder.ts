import { type PlaceHolderStateType } from '../features/RecipeCardForm/types/RecipeCardFormTypes';

const animatePlaceHolderBig = (
  inputValue: string | undefined,
  placeholderState: PlaceHolderStateType,
  styles: CSSModuleClasses
) => {
  if (inputValue || placeholderState === 'final') {
    return `${styles.labelBig} ${styles.labelBig__up}`;
  } else if (placeholderState === 'focus') {
    return `${styles.labelBig} ${styles.labelBig__moveUp}`;
  } else if (placeholderState === 'blur') {
    return `${styles.labelBig} ${styles.labelBig__moveDown}`;
  } else {
    return `${styles.labelBig}`;
  }
};

const animatePlaceHolderSmall = (
  inputValue: string | undefined,
  placeholderState: PlaceHolderStateType,
  styles: CSSModuleClasses
) => {
  if (inputValue || placeholderState === 'final') {
    return `${styles.labelSmall} ${styles.labelSmall__up}`;
  } else if (placeholderState === 'focus') {
    return `${styles.labelSmall} ${styles.labelSmall__moveUp}`;
  } else if (placeholderState === 'blur') {
    return `${styles.labelSmall} ${styles.labelSmall__moveDown}`;
  } else {
    return `${styles.labelSmall}`;
  }
};

const placeholderStateHandler = (
  inputValue: string | undefined,
  setState: React.Dispatch<React.SetStateAction<PlaceHolderStateType>>,
  action: PlaceHolderStateType
) => {
  if (inputValue !== '') {
    setState('final');
  } else {
    setState(action);
  }
};

export {
  animatePlaceHolderBig,
  animatePlaceHolderSmall,
  placeholderStateHandler,
};
