import logo from '../assets/img/logo.svg';

type GameHeaderProps = {
    isWinner: boolean;
    isLoser: boolean;
    startNewGame: () => void;
    language: string;
    handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function GameHeader({ isWinner, isLoser, startNewGame, language, handleLanguageChange}: GameHeaderProps) {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='text-chalk-effect logo-chalk-effect'>Hangman</h1>
            </div>
            <div className='message text-chalk-effect'>
                {isWinner && "Winner! - Click to try again"}
                {isLoser && "Nice Try - Click to try again"}
            </div>
            <button className='reset-game text-chalk-effect' onClick={startNewGame}>
                Start New Game
            </button>
            <div>
                <select className='languages chalk-effect' value={language} onChange={handleLanguageChange}>
                    <option value="english">🇺🇸 English</option>
                    <option value="german">🇩🇪 German</option>
                </select>
            </div>
        </div>
    )
}