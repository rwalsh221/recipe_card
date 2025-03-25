import styles from './FormListItem.module.css';

const FormListItem = ({
  formListItemContent,
}: {
  formListItemContent: string;
}) => {
  return (
    <li className={styles.formListItem}>
      <div className={styles.formListItem__position}>
        <p>1</p>
      </div>
      <div className={styles.formListItem__content}>
        <p>{formListItemContent}</p>
      </div>
    </li>
  );
};

export default FormListItem;
