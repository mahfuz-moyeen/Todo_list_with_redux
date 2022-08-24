import React, { useState } from 'react';
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';

const Header = () => {
    const dispatch = useDispatch();

    const [addInput, setAddInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(addInput));
        setAddInput('')
    };

    const handleCompleteAll = () => {
        dispatch(allCompleted());
    };

    const handleClearComplete = () => {
        dispatch(clearCompleted());
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    value={addInput}
                    onChange={(e) => setAddInput(e.target.value)}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-no-repeat bg-contain`}
                >
                    <img src={plusImage} className="w-6 h-6" alt="Add todo" />
                </button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={() => handleCompleteAll()} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={() => handleClearComplete()} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;