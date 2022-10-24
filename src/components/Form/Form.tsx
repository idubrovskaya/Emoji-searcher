import styles from './Form.module.css';

interface IProps {
  emojiText: string;
  emojiSearch: (text: string) => void;
}

export const Form = ({ emojiText, emojiSearch }: IProps) => {
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        value={emojiText}
        onChange={(event) => emojiSearch(event.target.value)}
      />
    </div>
  );
};
