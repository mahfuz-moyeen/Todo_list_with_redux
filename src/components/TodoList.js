import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todo);
    return (
        <div>
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {
                    todos.map((todo) => <Todo key={todo.id} todo={todo} />)
                }

            </div>
        </div>
    );
};

export default TodoList;