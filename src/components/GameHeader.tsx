// import logo from "../assets/img/ap_logo.svg";

// type GameHeaderProps = {
//     language: string;
//     handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }

export function GameHeader() {
    return (
        <div className='navbar'>
            {/* <div className='logo'> */}
                {/* <img src={logo} alt="logo"/> */}
                <h1 className='text-chalk-effect header'>Hangman</h1>
            {/* </div> */}
            {/* <div>
                <select className='languages chalk-effect' value={language} onChange={handleLanguageChange}>
                    <option value="english">🇺🇸 English</option>
                    <option value="german">🇩🇪 German</option>
                </select>
            </div> */}
        </div>
    )
}