import TextArea from "./TextArea";
import { connect } from "react-redux";

import React from 'react';
import { bindActionCreators } from "redux";
import { addTextAC } from "../../redux/action";

const TextAreaContainer=(newText, addText)=>{
    return <TextArea newText={newText} addText={addText}/>
}

const mapStateToProps = (state) => {
    return {
        newText: state.textAreaPage.newText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     addText: bindActionCreators(addTextAC, dispatch)
        }
    }

export default  connect(mapStateToProps, mapDispatchToProps)(TextAreaContainer);
