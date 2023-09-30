import React, { useState } from 'react';
import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const addTask = () => {
        const newTitle = title || 'Nueva tarea';
        const newDescription = description || 'Nueva descripción';

        const newTask = {
            title: newTitle,
            description: newDescription,
        };

        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const apellidoPaterno = "Choque";
    const apellidoMaterno = "Sillo";
    const ci = "8446917";

    return (
        <div className="App m-3">
            <div>
                <h2>Crear nueva tarea</h2>
                <input
                    type="text"
                    placeholder="Título de la tarea"
                    value={title}
                    onChange={handleTitleChange}
                />
                <br/>
                <textarea
                    placeholder="Descripción de la tarea"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
                <br/>
                <button onClick={addTask}>Guardar Tarea</button>
                <hr/>
            </div>
            <div className={"m-1"}>
                <h2>Tareas</h2>
                {tasks.map((task, index) => (
                    <div key={index} className={"p-2"}>
                        <strong>
                            {task.title}+"{apellidoPaterno} {apellidoMaterno} {ci}"
                        </strong>
                        <p>{task.description}+"{apellidoPaterno} {apellidoMaterno} {ci}"</p>
                        <button onClick={() => deleteTask(index)}>Eliminar Tarea</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;