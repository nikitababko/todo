import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

import editSvg from "assets/img/edit.svg";

import "./Tasks.scss";

const Tasks = ({
    list,
    onEditTitle,
    onAddTask,
    onRemoveTask,
    onEditTask,
    withoutEmpty,
    onCompleteTask,
}) => {
    const editTitle = () => {
        const newTitle = window.prompt("List name", list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            axios
                .patch("http://localhost:3001/lists/" + list.id, {
                    name: newTitle,
                })
                .catch(() => {
                    alert("Failed to update list title!");
                });
        }
    };

    return (
        <div className="tasks">
            <Link to={`/lists/${list.id}`}>
                <h2 style={{ color: list.color.hex }} className="tasks__title">
                    {list.name}
                    <img onClick={editTitle} src={editSvg} alt="Edit icon" />
                </h2>
            </Link>
            <div className="tasks__items">
                {!withoutEmpty && list.tasks && !list.tasks.length && <h2>No tasks</h2>}
                {list.tasks &&
                    list.tasks.map((task) => (
                        <Task
                            key={task.id}
                            list={list}
                            onEdit={onEditTask}
                            onRemove={onRemoveTask}
                            onComplete={onCompleteTask}
                            {...task}
                        />
                    ))}
            </div>
            <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
        </div>
    );
};

export default Tasks;
