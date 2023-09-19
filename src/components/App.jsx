import React, { useEffect } from "react";
import { useState } from "react";
import ItemInput from "./ItemInput";
import Tasks from "./Taks";

function App (){

    
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [checkedItems, setCheckedItems] = useState([]);
    
    let control = false;

    useEffect(()=>{
        if(localStorage.getItem("storedItems").length > 0 && localStorage.getItem("storedItems")!=="undefined"){
            setItems(JSON.parse(localStorage.getItem('storedItems')))
        }else{
            localStorage.setItem("storedItems", [])
        }
        if(localStorage.getItem("storedCheckedItems").length > 0){
            setCheckedItems(JSON.parse(localStorage.getItem('storedCheckedItems')))
        }
        control = true;
    }, [])
    
    useEffect(()=>{
        !control && localStorage.setItem('storedItems', JSON.stringify(items));
    },[items])
    useEffect(()=>{
        !control && localStorage.setItem('storedCheckedItems', JSON.stringify(checkedItems))
    },[checkedItems])

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
            ((action === "add") ? listName(prevChecked => {return [...prevChecked, itemValue]})
            : listName(prevItems => {return [...prevItems.filter(item => item !== (itemValue))]})
            );
        }

        if(e.target.checked && !checkedItems.includes(itemValue)){
            document.getElementById(itemValue).checked=false;
            setLists(setCheckedItems, "add")
            setLists(setItems, "remove");   
        }else if(!e.target.checked){
            setLists(setCheckedItems, "remove");
            setLists(setItems, "add");            
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
