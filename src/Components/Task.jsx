import App from "../App"
import workReducer from "./WorkReducer"


export default function Task({id, title, completed, handleEdit, handleDeleted, tasks}) {
    return (
        <>
            <ul>
                <li>
                <label>
                    <input type="checkbox" checked={completed} readOnly />
                    ... {title}
                </label>
                <button onClick={() => handleDeleted(id)}>Delete!</button> <button onClick={() => handleEdit(id, tasks)} style={{backgroundColor: "yellow"}} > Edit! </button>
                </li>
            </ul>
        </>
    )
}