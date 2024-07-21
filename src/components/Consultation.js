import React, { useState } from 'react';
import '../components/css/consultation.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchChatResponse, addConsultation } from '../features/consultation/consultationSlice';
import enterBtnIcon from '../asset/images/enterBlue.svg'
import apiAnimation from '../asset/images/lodingAnimation2.gif'

const Consultation = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    const { defaultSuggestion, chatLog, status, error } = useSelector(state => state.consultation);


    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };
    const handleSuggestionInput = (suggestion) => {
        dispatch(addConsultation({ user: 'You', message: suggestion }));
        dispatch(fetchChatResponse(suggestion));
    };
    const handleSubmit = (e) => {
        if (e.keyCode === 13)
            handleSendMessage();
    }
    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        dispatch(addConsultation({ user: 'You', message: userInput }));
        dispatch(fetchChatResponse(userInput));
        setUserInput('');
    };

    return (
        <div id='consultation' className="flex flex-col justify-end p-6 items-center bg-background text-foreground lg:px-40 ">
            {chatLog.length ?
                (<div className="w-full mb-4">
                    {chatLog.map((log, index) => (
                        <div key={index} className={`flex ${log.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-2 m-1 rounded ${log.user === 'You' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                                <strong>{log.user}: </strong>{log.message}
                            </div>
                        </div>
                    ))}
                    {status === 'loading' && <img height={150} width={150} src={apiAnimation} alt='loding.....' />}
                    {status === 'failed' && <p>Error: {error}</p>}
                </div>)
                : (<div id='suggestionBox' className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 h-96 lg:h-auto overflow-y-auto p-2">
                    {defaultSuggestion.map((suggestion, index) => (
                        <div key={index} onClick={() => handleSuggestionInput(suggestion)} className="flex flex-col items-center justify-center p-4 bg-card text-card-foreground rounded-lg boxShadowWhite hover:bg-slate-400 hover:text-primary-foreground transition-colors duration-300">
                            <span>{suggestion}</span>
                        </div>
                    ))}
                </div>)}
            <div className="flex flex-col items-center w-full bg-card text-card-foreground">
                <div className="flex items-center justify-between w-full p-2 mt-6 rounded-full boxShadowWhite ">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        onKeyDown={handleSubmit}
                        placeholder="Message Meditail AI Consultant"
                        className="flex-grow bg-transparent outline-none text-foreground px-8"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="ml-2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/80 transition-colors duration-300"
                    >
                        <img src={enterBtnIcon} alt="Send" height={25} width={25} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
