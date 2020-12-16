import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List.component';
import ListItemCreator from './components/ListItemCreator/ListItemCreator.component';
import getColors from './utils/colors.utils'



function App() {
  // set initial state for colors
  const [colors, setColors] = useState(null)

  useEffect(() => {
    // on component mount run sync function to get colors
    getColors(setColors)
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple TODO List App</h1>

        { /** Display a loading message while the colors load */
          colors === null && <span>Loading..</span>
        }

        { //Display the parts if the colors have loaded
          colors !== null &&
          <div class="wrapper">
            <ListItemCreator colors={colors} firstColor={colors[0].hex} />
            <List />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
