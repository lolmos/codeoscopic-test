
// function for doing async call and returning colors array
// takes in the hook to use and then returns the hook withh the response as a paramater
// 
const getColors = async (setterHook) => {
  // set the url
  const colorsURL = "http://www.colr.org/json/colors/random/10"

  const fetchColors = async () => await fetch(colorsURL)
    .then(response => response.json())
    .then(data => setterHook(data.colors))
    .catch(error => {
      console.error('There was an error!', error);
    });
  ;
  return fetchColors()
}

export default getColors;