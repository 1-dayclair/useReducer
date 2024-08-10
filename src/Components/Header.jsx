import { useState } from "react"

export default function Header() {
const [newTask, setNewTask] = useState("")

const [brandNew, setBrandNew] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setBrandNew((brandNewNow) => {
            return [
                ...brandNewNow, {userId: 1,
                    id: 3,
                    title: "Take the tiger meat out of the fridge.",
                    completed: false},
            ];
        });
    }

    console.log(brandNew)

    return (
        <>
           <h1 style={{textAlign: "center", color: "seagreen"}} >Things To Do</h1>
           <form className="form" onSubmit={handleSubmit}>
                <label> Do You Have Anything to Get Done?</label>
                    <input
                        type="text" 
                        value={newTask} onChange={e => setNewTask(e.target.value)}/>
                    <button>
                        Add New!
                    </button>
            </form>
            <ul>
                {brandNew.map(brandNews => {
                    return (
                    <li key={brandNew.id}>
                    <label>
                        <input type="checkbox" checked={brandNew.completed}/>
                        {brandNew.title}
                    </label>
                    <button>Delete!</button>
                </li>
                )
                })}
            </ul>
        </>
    )
}; 

