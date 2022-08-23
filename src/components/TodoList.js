import React from 'react';
import Todo from './Todo';

const TodoList = () => {
    return (
        <div>
                    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            <Todo />
        </div>
        </div>
    );
};

export default TodoList;