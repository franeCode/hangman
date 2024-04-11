type GameKeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
};

export function GameKeyboard({ activeLetters, inactiveLetters, addGuessedLetter }: GameKeyboardProps) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className='keyboard-container'>
      {alphabet.map((key) => {
        // const isActive = activeLetters.includes(letter)
        // const isInactive = inactiveLetters.includes(letter)
        return (
        <button onClick={() => addGuessedLetter(key)} key={key} className='keyboard-key'>
          {key}
        </button>
      )})}
    </div>
  );
}