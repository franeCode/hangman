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
            <div
                style={{
                height: "50px",
                width: "10px",
                background: "black",
                position: "absolute",
                top: 0,
                right: 0,
                }}
            />
            <div
                style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft: "120px",
                }}
            />
            <div
                style={{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft: "120px",
                }}
            />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}