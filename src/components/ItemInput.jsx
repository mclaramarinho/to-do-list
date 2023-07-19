import React from "react";

function ItemInput (props){
    return(
        <div>
            <input type="text" id="inputBox" value={props.value} onChange={props.changer} onBlur={(e) => {setTimeout(e.target.focus())}} />
            <button onClick={props.handler}>Enter</button>
        </div>
    )
}

export default ItemInput;