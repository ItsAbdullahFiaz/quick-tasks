import React, { useState } from 'react';
import '../App.css';
import ItemList from '../components/ItemList';
import InputField from '../components/InputField';
import PriorityCheck from '../components/PriorityCheck';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('');
    const [error, setError] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '' && priority !== '') {
            setTasks([...tasks, { id: Date.now(), title: newTask, priority, completed: false }]);
            setNewTask('');
            setPriority('')
            setError('')
        } else {
            setError('Both task and priority must be provided');
        }
    };

    return (
        <div className="todo-app">
            <div className="todo-header">
                <h2>TodoApp</h2>
            </div>
            {error && <div className='error-message'>{error}</div>}
            <ItemList tasks={tasks} setTasks={setTasks} />
            <div className="todo-form">
                <InputField placeholder={'Add a new task'} value={newTask} onChange={setNewTask} />
                <p className='heading-two'>Task Priority</p>
                <PriorityCheck value={priority} onChange={setPriority} />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    );
};

export default Home;
