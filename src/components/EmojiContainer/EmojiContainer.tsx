import { EmojiRow } from '../EmojiRow/EmojiRow';
import { Form } from '../Form/Form';
import { emojies } from '../Emoji';
import { useState } from 'react';

export const EmojiContainer = () => {
  const [emojiSearch, setEmojiSearch] = useState<string>('');

  const chooseEmoji = (emojiText: string) => {
    setEmojiSearch(emojiText);
  };

  const filteredEmojis = emojies.filter((emoji) => {
    return (
      emoji.title.toLowerCase().includes(emojiSearch.toLowerCase()) ||
      emoji.keywords.toLowerCase().includes(emojiSearch.toLowerCase())
    );
  });

  return (
    <>
      <Form emojiText={emojiSearch} emojiSearch={chooseEmoji} />
      {filteredEmojis.map((emoji) => (
        <EmojiRow icon={emoji.symbol} name={emoji.title} />
      ))}
    </>
  );
};
