type GameMessages = {
    isWinner: boolean;
    isLoser: boolean;
  }

export function GameMessages({ isWinner, isLoser }: GameMessages) {
    return (
        <div className="message-container">
            {isWinner && <p className="message text-chalk-effect">Winner!</p>}
            {isLoser && <p className="message text-chalk-effect">Looser!</p>}
        </div>
    );
}