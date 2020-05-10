import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addTextAC } from '../../redux/action';


const TextArea=()=>{

    const dispatch = useDispatch();
    const storedText= useSelector(state=> state.textAreaPage.text);
    const [stateText, setText] = useState(storedText)

   
    const onTextChange=(e)=>{
        
        setText(e.target.value)
    }


    return(
        <div>
            <textarea value={stateText} onChange={onTextChange} />
            <button onClick={()=>dispatch(addTextAC(stateText))}>PUSH</button>
        </div>
    )
}

export default TextArea