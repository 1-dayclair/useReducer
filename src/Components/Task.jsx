import { useState } from "react"
import App from "../App"
import workReducer from "./WorkReducer"


export default function Task({id, title, completed, handleEdit, handleDeleted}) {

        const [check, setCheck] = useState(completed)
    

    return (
        <>
            <ul>
                <li>
                <label>
                    <input onChange={ () => setCheck(!check) } type="checkbox" checked={check} />
                    ... {title}
                </label>
                <button onClick={() => handleDeleted(id)}>Delete!</button> <button onClick={() => handleEdit(id, title)} style={{backgroundColor: "yellow"}} > Edit! </button>
                </li>
            </ul>
        </>
    )
}
// JSX for actual task list section, plus button, two, along with checkboxes^^