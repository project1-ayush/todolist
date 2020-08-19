import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    //console.log(props.items);
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
        
     <p>
         
         <input type="text" id={item.key} value={item.text} 
             onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}
        />
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>

    })

    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;
  //we bring input tag inside p tag becoz then we can not edit the list or update the list inside p tag only.