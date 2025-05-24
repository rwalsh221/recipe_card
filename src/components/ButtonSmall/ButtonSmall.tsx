import styles from './ButtonSmall.module.css';

type ButtonProps = {
  content: string;
  onclick?: () => void;
};

const ButtonSmall = ({ content, onclick }: ButtonProps) => {
  return (
    <button className={styles.buttonSmall} onClick={onclick}>
      {content}
    </button>
  );
};

export default ButtonSmall;
