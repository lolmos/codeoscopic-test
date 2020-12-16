import React from 'react';
import './ListItem.css'

// Component to display individual list items
// deconstruct props 
// removeListItem prop is a Redux action passed from the parent
const ListItem = ({ id, hex, itemName, removeListItem }) => {

  return (
    <div
      id={id}
      style={{ backgroundColor: `#${hex}` }}
      className="list-item"
    >
      <span className="item-name">
        {itemName}
      </span>
      <button
        className="list-item--button"
        type='submit'
        onClick={() => removeListItem(id)}
      >
        Delete item
      </button>
    </div >
  )
}

export default ListItem;