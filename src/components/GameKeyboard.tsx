export function GameKeyboard() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className='keyboard-container'>
      {alphabet.map((letter) => (
        <button key={letter} className='keyboard-key'>
          {letter}
        </button>
      ))}
    </div>
  );
}