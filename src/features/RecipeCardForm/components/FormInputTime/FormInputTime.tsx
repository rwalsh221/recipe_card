import styles from './FormInputTime.module.css';

const FormInputTime = () => {
  return (
    <div className={styles.formInputTime}>
      <h3>title</h3>
      <div className={styles.FormInputTime__inputContainer}>
        <div>
          <label>label</label>
          <input />
        </div>
        <div>
          <label>label</label>
          <input />
        </div>
      </div>
    </div>
  );
};

export default FormInputTime;

// <div className={styles.formInputContainer}>
// <input
//   onChange={(e) => {
//     changeInputHandler(formInputId, e.target.value);
//   }}
//   id={formInputId}
//   name={formInputId}
//   type={inputType}
//   placeholder={inputPlaceHolder}
//   value={inputValue}
// />
// <label htmlFor={formInputId} />
// </div>
