import '../App.css'
import CheckBox from './CheckBox'
import CheckPriority from './CheckPriority'

const ItemList = ({ tasks, setTasks }) => {

    const sortedArray = [...tasks].sort((a, b) => b.priority - a.priority)

    const ToggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="todo-list">
            {sortedArray.map(task => (
                <div key={task.id} className="todo-item">
                    <CheckBox checked={task.completed} taskId={task.id} ToggleTaskStatus={ToggleTaskStatus} />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <span style={{ color: task.priority == 2 ? 'red' : task.priority == 1 ? 'orange' : 'green' }}>
                        {CheckPriority(task.priority)}
                    </span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;