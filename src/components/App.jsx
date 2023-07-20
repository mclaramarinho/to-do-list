import React from "react";
import { useState } from "react";
import ItemInput from "./ItemInput";
import Tasks from "./Taks";

function App (){
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [checkedItems, setCheckedItems] = useState([]);

    function handleClick (){
        if(!items.includes(value) && value.length>0){
            setItems(prevItems => {return [...prevItems, value]})
            setValue("")
        }
    }
    function handleChange (e){
        setValue(e.target.value);
    }
    function handleCheck(e){
        let itemValue = e.target.name;
        
        function setLists (listName, action){
            if(action === "add"){
                listName(prevChecked => {return [...prevChecked, itemValue]})
            }
            else{
                listName(prevItems => {return [...prevItems.filter(item => item !== (itemValue))]})
            }
        }
        if(e.target.checked && !checkedItems.includes(itemValue)){
            document.getElementById(itemValue).checked=false;
            setLists(setCheckedItems, "add")
            checkedItems.map(checkedItem => {return document.getElementById(checkedItem).checked=true})
            setLists(setItems, "remove");
        }else if(!e.target.checked){
            setLists(setCheckedItems, "remove");
            setLists(setItems, "add");
            document.getElementById(itemValue).checked=true;
            
        }
    }

    return (
        <div className="container-main">
            <h1>To Do</h1>
            <div className="container">
                <ItemInput handler={handleClick} value={value} changer={handleChange} />
            </div>
            <Tasks unchecked={items} checked={checkedItems} handler={handleCheck} />
        </div>
    )
}

export default App;