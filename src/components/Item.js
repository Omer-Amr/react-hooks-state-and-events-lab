import React, {useState} from "react";

function Item({ name, category }) {
  const [added, itemIsAdded] = useState(true)
  function handleClick(){
    itemIsAdded((added)=>!added)
  }
  const addItem = added?'':'in-cart'
 
  return (
    <li className={addItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}> {added?'Add to Cart': "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
