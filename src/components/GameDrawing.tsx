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


export function GameDrawing() {
    return (
        <div style={{ position: "relative" }}>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div className="small-vertical" />
            <div className="top-horizontal" />
            <div className="big-vertical" />
            <div className="bottom-horizontal" />
        </div>
    )
}