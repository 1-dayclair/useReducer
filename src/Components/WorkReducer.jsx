export default function workReducer(tasks, action) {
    switch (action.type) {
        case "add!": {
            return [
                ...tasks,
                {
                    userId: action.userId,
                    id: action.id,
                    title: action.title,
                    completed: false,
                },
            ];
        }
        case "changed!": {
            return tasks.map((x) => {
                if (x.id === action.task.id) {
                    return action.task;
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

