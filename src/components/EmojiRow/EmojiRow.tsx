import styles from './EmojiRow.module.css';

interface IProps {
  icon: string;
  name: string;
}

export const EmojiRow = ({ icon, name }: IProps) => {
  return (
    <div className={styles.row}>
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
};
