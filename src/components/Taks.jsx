import React from "react";
import ListItem from "./ListItem";

function Tasks(props){
    const uncheckedArr = props.unchecked;
    const checkedArr = props.checked;
    const handler = props.handler;

    return(
        <div>
            <div className="container">
                <div className="left">
                    {uncheckedArr.length > 0 ? 
                        (uncheckedArr.map(item => {return <ListItem name={item} value={item} handler={handler} />}))
                        : <p style={{"textAlign":"center", "color":"green"}}>Nothing to do here</p>
                    }
                </div>
            </div>

            <div className="container">
                {checkedArr.length > 0 && <p>Done</p>}
                <div className="left">
                    {checkedArr.length > 0 ? 
                        (checkedArr.map(checkedItem => {return <ListItem name={checkedItem} value={checkedItem} handler={handler} check={true} class="checked-item" />}))
                        : <p style={{"textAlign":"center", "color":"crimson"}}>Nothing done yet</p>
                    }
                </div>
            </div>
    </div>
    )
}

export default Tasks;