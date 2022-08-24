import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todo);
    const { status, colors } = useSelector(state => state.filter);

    const checkStatus = (todo) => {
        switch (status) {
            case "Incomplete":
                return !todo.completed;

            case "Complete":
                return todo.completed;

            default:
                return true;
        }
    };

    const checkColor = (todo) => {
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        }
        return true;
    };

    return (
        <div>
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {
                    todos.filter(checkStatus).filter(checkColor).map((todo) => <Todo key={todo.id} todo={todo} />)
                }

            </div>
        </div>
    );
};

export default TodoList;