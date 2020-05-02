import React from 'react';

const TextArea=(props)=>{

    let state= props.textAreaPage;
    let newTextAtea= state.newTextAtea;
    let onTextClick= ()=>{
        props.addText();
    }
    let onTextChange=(e)=>{
        let text=e.target.value;
        props.pushButton(text)
    }


    return(
        <div>
            <textarea value={newTextAtea}
            onChange={onTextChange}
            placeholder='hhhhh'></textarea>
            <button onClick={onTextClick}>PUSH</button>
        </div>
    )
}

export default TextArea