import styles from './FormListItem.module.css';

const FormListItem = ({
  content,
  position,
}: {
  formListItemContent: string;
  position: number;
}) => {
  return (
    <li className={styles.formListItem}>
      <div className={styles.formListItem__position}>
        <p>{position}</p>
      </div>
      <div className={styles.formListItem__content}>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default FormListItem;
