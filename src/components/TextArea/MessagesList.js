import React from 'react';

const MessagesList = ({list})=>{
    return(
        <div>
            <ul>
              {
                  list.map(el=>(<li key={el}>{el}</li>))
              }  
            </ul>
        </div>
    )
}

export default MessagesList