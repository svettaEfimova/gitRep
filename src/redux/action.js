import types from './types'

export function addTextAC(text){
    return(dispatch)=> {
        dispatch({
            type: types.ADD_TEXT,
            newNext: text,
        })
    }
}