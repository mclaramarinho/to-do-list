import React from "react";

function ItemInput (props){
    const handler = () => {return props.handler()};

    return(
        <div>
            <input type="text" id="inputBox" onKeyUp={(e) => {(e.key==="Enter") && handler()}} value={props.value} onChange={props.changer} />
            <button onClick={props.handler}>Enter</button>
        </div>
    )
}

export default ItemInput;
