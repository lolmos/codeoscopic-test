// set the ulr 
const colorsURL = "http://www.colr.org/json/colors/random/10"

// function for doing async call and returning colors array
// takes in the hook to use and then returns the hook withh the response as a paramater
// 
const getColors = async (setterHook) => {
  const fetchColors = async () => await fetch(colorsURL)
    .then(response => response.json())
    .then(data => setterHook(data.colors));
  return fetchColors()
}

export default getColors;