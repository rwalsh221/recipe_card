import styles from './Buttons.module.css';

type ButtonProps = {
  content: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonSmall = ({ content, onclick }: ButtonProps) => {
  return (
    <button className={styles.buttonSmall} onClick={onclick}>
      {content}
    </button>
  );
};

export default ButtonSmall;
