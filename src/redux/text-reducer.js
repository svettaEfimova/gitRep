const ADD_TEXT ='ADD_TEXT';
const PUSH_BUTTON = 'PUSH_BUTTON'

let initialState = {
    newText: 'uhfiuhdj'
};

const textAreaReducer = (state = initialState, action)=>{
    switch(action.type) {
        case ADD_TEXT: {
            return{
                ...state,
                newText: ''
            }
        }
        case PUSH_BUTTON: {
            return{
                ...state,
                newText: action.text
            }
        }
            default:
                return state
        }
    }

export const addTextAC=()=>({type: ADD_TEXT})
export const pushButtonAC=(text)=>({type: PUSH_BUTTON, text})



export default textAreaReducer

