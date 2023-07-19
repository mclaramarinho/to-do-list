import React from "react";

function ListItem (props){
    return(
        <label htmlFor={props.name} className={props.class}>
            <input type="checkbox" name={props.name} onChange={props.handler} id={props.name} />
            <span>{props.value}</span>
        </label>
    )
}

export default ListItem;