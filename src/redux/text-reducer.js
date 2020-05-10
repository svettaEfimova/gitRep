import types from './types'

let initialState = {
    newText: 'uhfiuhdj'
};

const textAreaReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.ADD_TEXT: {
            return{
                ...state,
                text: action.text
            }
        }
       
            default:
                return state
        }
    }



export default textAreaReducer

