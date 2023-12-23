export default function MoveTile({ click, children }) {
    return (
        <button onClick={click}>{children}</button>
    )
}