import React, { useState } from 'react';

const TextArea=(props)=>{

    const {newText, addText}=props;
    const [stateText,setText] = useState(newText)

    const onTextClick= ()=>{
         addText(stateText);
        
    }
    const onTextChange=(e)=>{
        let text=e.target.value;
        setText(text)
    }


    return(
        <div>
            <textarea value={stateText}
            onChange={onTextChange}
            placeholder='hhhhh'/>
            <button onClick={onTextClick}>PUSH</button>
        </div>
    )
}

export default TextArea