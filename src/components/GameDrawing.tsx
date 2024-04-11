import React from 'react';

const HEAD = (
    <div className="head"></div>
)

const BODY = (
    <div className="body"></div>
)

const RIGHT_ARM = (
    <div className="right-arm"></div>
)

const LEFT_ARM = (
    <div className="left-arm"></div>
)

const RIGHT_LEG = (
    <div className="right-leg"></div>
)

const LEFT_LEG = (
    <div className="left-leg"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type GameDrawingProps = {
    numberOfGuessedLetters: number;
}

export function GameDrawing({ numberOfGuessedLetters }: GameDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, numberOfGuessedLetters).map((part, index) => React.cloneElement(part, { key: index }))}
            <div className="small-vertical" />
            <div className="top-horizontal" />
            <div className="big-vertical" />
            <div className="bottom-horizontal" />
        </div>
    )
}