export default function Task({userId, id, title, completed}) {
    return (
        <>
            <ul>
                <li>
                <label>
                    <input type="checkbox" checked={completed} />
                    ... {title}
                </label>
                <button onClick={() => onClick(id)}>Delete!</button>
                </li>
            </ul>
        </>
    )
}