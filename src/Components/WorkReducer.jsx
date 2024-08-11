
// Switches and logic for handling actions
export default function workReducer(tasks, action) {
    switch (action.type) {
        case "new!": {
            return [
                {
                    id: action.id,
                    title: action.title,
                    completed: false,
                },
                ...tasks
            ];
        }
        case "edit!": {
            return tasks.map((x) => {
                if (x.id === action.task.id) {
                    return { ...x, title: action.task.title }; 
                } else {
                    return x;
                }
            });
        }
        case "delete!": {
            return tasks.filter((y) => y.id !== action.id);
        }
        default: {
            throw Error ("DONT'T DO THAT! DO SOMETHING ELSE!!");
        }
    }
}
// Switches and logic for handling actions^^

