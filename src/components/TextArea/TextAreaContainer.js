import TextArea from "./TextArea";
import { connect } from "react-redux";
import { addTextAC, pushButtonAC } from "../../redux/text-reducer";


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
const TextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(TextArea);
export default TextAreaContainer;