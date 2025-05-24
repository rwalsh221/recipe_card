import styles from './Buttons.module.css';

type ButtonProps = {
  content: string;

  onclickEvent?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const EventButton = ({ content, onclickEvent }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onclickEvent}>
      {content}
    </button>
  );
};

export default EventButton;
