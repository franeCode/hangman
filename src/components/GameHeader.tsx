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
                <h1>Hangman</h1>
                <img src={logo} style={{ height: "3rem"}} alt="Hangman-logo" />
                {/* <p className='hand-drawn-line chalk-effect'></p> */}
            </div>
            <div className='message'>
                {isWinner && "Winner! - Click to try again"}
                {isLoser && "Nice Try - Click to try again"}
            </div>
            <button className='reset-game chalk-effect' onClick={startNewGame}>Start New Game</button>
            <div>
                <select className='languages chalk-effect' value={language} onChange={handleLanguageChange}>
                    <option value="english">🇺🇸 English</option>
                    <option value="german">🇩🇪 German</option>
                </select>
            </div>
        </div>
    )
}