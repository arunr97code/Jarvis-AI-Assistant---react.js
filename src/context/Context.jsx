import { createContext, useState } from "react";
import runChat from "../config/jarvis";

export const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayParagraph = (index, nextWord) => {
        setTimeout(() => {
             setResultData(prev=>prev+nextWord);
        }, 75*index)
    }
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSent();
        }
    }

    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt);
            // const response = await runChat(input);
        }else{
            setPreviousPrompt(prev=>[...prev, input]);
            setRecentPrompt(input);
            response = await runChat(input); 

        }
        let responseArray = response.split('**');
        let newResponse = '';
        for(let i = 0; i < responseArray.length; i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }else{
                newResponse += "<br><b style='font-weight:600'>" + responseArray[i] + "</b>";
            }
        } 
        let newResponse2 = newResponse.split('*').join('</br>');
        // setResultData(newResponse2);
        let newResponseArray = newResponse2.split(' ');
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayParagraph(i, nextWord + " ");
        } 
        setLoading(false);
        setInput('');
    } 

    const contextValue ={
        previousPrompt, 
        setPreviousPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        handleKeyDown

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider