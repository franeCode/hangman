type GameHeaderProps = {
    isWinner: boolean;
    isLoser: boolean;
    startNewGame: () => void;
    language: string;
    handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function GameHeader({ isWinner, isLoser, startNewGame, language, handleLanguageChange}: GameHeaderProps) {
    return (
        <div>
            <h1>Hangman</h1>
            <div className='message'>
            {isWinner && "Winner! - Click to try again"}
            {isLoser && "Nice Try - Click to try again"}
            <button onClick={startNewGame}>Start New Game</button>
            <select value={language} onChange={handleLanguageChange}>
                <option value="english">English</option>
                <option value="german">German</option>
            </select>
            </div>
        </div>
    )
}