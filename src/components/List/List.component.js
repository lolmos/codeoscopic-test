import React from 'react';
// Redux
import { connect } from 'react-redux'
import { removeListItem } from '../ListItemCreator/listSlice';
// import list item component
import ListItem from '../ListItem/ListItem.component';
// styles
import './List.css'

// List component
// takes in the list state passed in as props
// takes in removeListItem action as props
const List = ({ list, removeListItem }) => (
  <div className="list">
    {!list && <span>no items available</span>}
    {list &&
      list.map(
        ({ id, ...otherProps }) => (
          <ListItem key={id} id={id} {...otherProps} removeListItem={removeListItem} />
        )
      )
    }
  </div>
)
// pass the state into the props
const mapStateToProps = state => ({
  list: state.lists
})
// pass the actions in as props
const mapDispatchToProps = { removeListItem }
// use the connect higher order component with the state and the actions into the list component 
export default connect(mapStateToProps, mapDispatchToProps)(List);