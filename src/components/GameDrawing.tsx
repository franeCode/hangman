import React from 'react';

const HEAD = (
    <div className='head'>
        <svg className="circle-svg" viewBox="0 0 100 100" style={{ position: 'absolute', top: '19%', left: '99%', transform: 'translate(-50%, -50%)' }}>
        <circle className="circle-path" cx="50" cy="50" r="8"/>
      </svg>
    </div>
)

const BODY = (
    <div className="body chalk-effect"></div>
)

const RIGHT_ARM = (
    <div className="right-arm chalk-effect"></div>
)

const LEFT_ARM = (
    <div className="left-arm chalk-effect"></div>
)

const RIGHT_LEG = (
    <div className="right-leg chalk-effect"></div>
)

const LEFT_LEG = (
    <div className="left-leg chalk-effect"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type GameDrawingProps = {
    numberOfGuessedLetters: number;
}

export function GameDrawing({ numberOfGuessedLetters }: GameDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, numberOfGuessedLetters).map((part, index) => React.cloneElement(part, { key: index }))}
            <div className="small-vertical chalk-effect" />
            <div className="top-horizontal chalk-effect" />
            <div className="big-vertical chalk-effect" />
            <div className='diagonal chalk-effect' />
            <div className="bottom-horizontal chalk-effect" />
        </div>
    )
}