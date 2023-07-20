import React from "react";

function ListItem (props){
    let check = props.check;
    if(check){
        return(
            <label htmlFor={props.name} className={props.class}>
                <input type="checkbox" name={props.name} onChange={props.handler} id={props.name} checked />
                <span>{props.value}</span>
            </label> 
        )
    }else{
        return(
            <label htmlFor={props.name} className={props.class}>
                <input type="checkbox" name={props.name} onChange={props.handler} id={props.name} />
                <span>{props.value}</span>
            </label> 
        )
    }
    
}

export default ListItem;