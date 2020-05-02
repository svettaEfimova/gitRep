import TextArea from "./TextArea";
import { connect } from "react-redux";
import { addTextAC, pushButtonAC } from "../../redux/text-reducer";
import React from 'react';
const TextAreaContainer=(props)=>{
    return <TextArea newText={props.newText}/>
}

const mapStateToProps = (state) => {
    return {
        newText: state.textAreaPage.newText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       addText: (text) => {
            let action = addTextAC(text);
            dispatch(action);
        },
        pushButton: () => {
            dispatch((pushButtonAC));
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(TextAreaContainer);
