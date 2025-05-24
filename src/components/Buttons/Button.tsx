import styles from './Buttons.module.css';

type ButtonProps = {
  content: string;
  onclick?: () => void;
};

const Button = ({ content, onclick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onclick}>
      {content}
    </button>
  );
};

export default Button;
