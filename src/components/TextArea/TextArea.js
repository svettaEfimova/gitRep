import React from 'react';

const TextArea=(props)=>{
    const {newText}=props;
    
    let onTextClick= ()=>{
   
        props.addText();
    }
    let onTextChange=(e)=>{
        let text=e.target.value;
        props.pushButton(text)
    }


    return(
        <div>
            <textarea value={newText}
            onChange={onTextChange}
            placeholder='hhhhh'/>
            <button onClick={onTextClick}>PUSH</button>
        </div>
    )
}

export default TextArea