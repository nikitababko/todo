import React, { useState } from "react";
import axios from "axios";

import addSvg from "assets/img/add.svg";

const AddTaskForm = ({ list, onAddTask }) => {
    const [visibleForm, setVisibleForm] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState("");

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm);
        setInputValue("");
    };

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false,
        };
        setIsLoading(true);
        axios
            .post("http://localhost:3001/tasks", obj)
            .then(({ data }) => {
                onAddTask(list.id, data);
                toggleFormVisible();
            })
            .catch(() => {
                alert("Failed to add task!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="tasks__form">
            {!visibleForm ? (
                <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon" />
                    <span>New task</span>
                </div>
            ) : (
                <div className="tasks__form-block">
                    <input
                        onKeyDown={handleKeyPress}
                        value={inputValue}
                        className="field"
                        type="text"
                        placeholder="Task name"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button disabled={isLoading} onClick={addTask} className="button">
                        {isLoading ? "Adding..." : "Add task"}
                    </button>
                    <button onClick={toggleFormVisible} className="button button--grey">
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddTaskForm;
