import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getCurrentDate} from './curTime';

function ListItems(props){
    const items = props.items;
    console.log(getCurrentDate())

    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
        <input id="chbx" type="checkbox" />
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>

        <span>

       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
        <span id="date">{getCurrentDate()}</span>

     </p>
    </div>})
    return <div>
        {listItems}
    
    </div>;
  }

  export default ListItems;