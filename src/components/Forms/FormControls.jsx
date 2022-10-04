import styles from './FormControls.css';
import classnames from 'classnames';

function FormControl({ label, required, children }) {
  const className = classnames(styles.FormControl, styles.LabelText);
  return (
    <label className={className}>
      <LabelText text={label} required={required} />
      {children}
    </label>
  );
}
export function LabelText({ text, required }) {
  const className = classnames(styles.LabelText, {
    [styles.Required]: required,
  });
  return <span className={className}>{text}</span>;
}

export function FormButton({ children, ...rest }) {
    return (
      <button className={styles.FormButton} {...rest}>
        {children}
      </button>
    );
  }

export function InputControl({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <input {...rest} required={required} />
    </FormControl>
  );
}