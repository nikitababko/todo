import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import List from "components/List";
import Badge from "components/Badge";

import closeSvg from "assets/img/close.svg";

import "./AddList.scss";

const AddList = ({ colors, onAddList }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const ref = useRef();
    useOnClickOutside(ref, () => onClose());

    useEffect(() => {
        if (Array.isArray(colors)) {
            setSelectedColor(colors[0].id);
        }
    }, [colors]);

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue("");
        setSelectedColor(colors[0].id);
    };

    const addList = () => {
        if (!inputValue) {
            alert("Enter the name of the list.");
            return;
        }
        setIsLoading(true);
        axios
            .post("http://localhost:3001/lists", {
                name: inputValue,
                colorId: selectedColor,
            })
            .then(({ data }) => {
                const color = colors.filter((c) => c.id === selectedColor)[0];
                const listObj = {
                    ...data,
                    color,
                    tasks: [],
                };
                onAddList(listObj);
                onClose();
            })
            .catch(() => {
                alert("Failed to add list!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addList();
        }
    };

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: "list__add-button",
                        icon: (
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 1V15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 8H15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ),
                        name: "Add list",
                    },
                ]}
            />
            {visiblePopup && (
                <div ref={ref} className="add-list__popup">
                    <img
                        onClick={onClose}
                        src={closeSvg}
                        alt="Close button"
                        className="add-list__popup-close-btn"
                    />
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="field"
                        type="text"
                        placeholder="List name"
                    />
                    <div className="add-list__popup-colors">
                        {colors.map((color) => (
                            <Badge
                                onClick={() => setSelectedColor(color.id)}
                                key={color.id}
                                color={color.name}
                                className={selectedColor === color.id && "active"}
                            />
                        ))}
                    </div>
                    <button onClick={addList} className="button">
                        {isLoading ? "Adding..." : "Add"}
                    </button>
                </div>
            )}
        </div>
    );
};

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default AddList;
