export default function Task({userId, id, title, completed, onToggle}) {
    return (
        <>
            <ul>
                <li>
                <label>
                    <input type="checkbox" onChange={() => onToggle(id, e.target.checked)} checked={completed} />
                    ... {title}
                </label>
                <button onClick={() => e.target.value(id)}>Delete!</button> <button style={{backgroundColor: "yellow"}} > Edit! </button>
                </li>
            </ul>
        </>
    )
}