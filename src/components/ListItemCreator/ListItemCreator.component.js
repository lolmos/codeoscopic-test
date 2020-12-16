import React, { useState } from 'react';
// redux 
import { useDispatch } from 'react-redux';
//pull in the actions needed from our slice
import { addListItem } from './listSlice';
//styles
import './ListItemCreator.css'




const DropDown = ({ addListItem, colors, ...otherProps }) => (
  // use basic select component
  // 1. destructure the colors array 
  // 2. spread the rest of the props to the select tag
  // 3. map the array and return options with values
  <select {...otherProps} className='dropdown'>
    { colors.map(({ index, id, hex, tags }) => (
      <option
        key={id}
        value={hex}
      >
        #{hex} &nbsp; {tags[0].name} &nbsp;

      </option>
    ))
    }
  </select>
)

const ListItemCreator = ({ colors, firstColor }) => {
  //create the state for the list item text
  const [listItemText, setListItemText] = useState('')
  // onChange funtion for itemtext
  const itemTextOnChange = e => { e.preventDefault(); setListItemText(e.target.value) }
  // create the sate for selected colors
  const [selectedColor, setSelectedColor] = useState(firstColor)
  // onChange funtion for colors
  const colorOnChange = e => { e.preventDefault(); setSelectedColor(e.target.value) }

  const dispatch = useDispatch();
  // create a unique id for each item which we can use as a key when iterating in list 
  // combine the hex value and a timestamp
  const createUniqueId = (hexColor) => {
    let timeStamp = new Date().getTime()
    return hexColor + timeStamp.toString()
  }

  return (
    <div className='item-creator'>
      <form
        onSubmit={e => {
          e.preventDefault()
        }
        }
      >
        <label> Enter the task name</label>
        <input
          id="iteminput"
          name="itemname"
          onChange={itemTextOnChange}
          type="text"
          value={listItemText}
        />

        <label> Select a color</label>
        <DropDown
          name="color"
          colors={colors}
          value={selectedColor}
          onChange={colorOnChange}
        />


        <button
          className="creator-button"
          // disable button if the field is empty
          disabled={listItemText === '' && true}
          type="submit"
          onClick={() => {
            // send items to redux
            dispatch(
              // use addListItemAction
              addListItem(
                // send object
                {
                  id: createUniqueId(selectedColor),
                  itemName: listItemText,
                  hex: selectedColor
                }
              ))
            // reset list item to empty string
            setListItemText('')
          }}
        >
          Add Item
      </button>
      </form>
    </div >
  )
}

export default ListItemCreator;