import workReducer from "./WorkReducer"


export default function Task({userId, id, title, completed, handleEdit, handleDeleted}) {
    return (
        <>
            <ul>
                <li>
                <label>
                    <input type="checkbox" checked={completed} />
                    ... {title}
                </label>
                <button onClick={handleDeleted}>Delete!</button> <button onSubmit={handleEdit} style={{backgroundColor: "yellow"}} > Edit! </button>
                </li>
            </ul>
        </>
    )
}