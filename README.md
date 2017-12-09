# zillow-widget

# Front End Coding Test

## Create a real estate property listing widget.

1. Download the included files to get started.
2. Create the widget - You will get data from two feed APIs - samples of this data can be found in [batmanRealty.js](batmanRealty.js) and [supermanRealty.js](supermanRealty.js).  Using these sample files as a guide, please construct a widget that will correctly show these feeds. Please note: data from actual feeds would follow the sample structures, and would have varying amounts of data ie. overlapping / missing values.
3. Upload the completed project files to Hackerrank
4. Profit!

### Please adhere to the additional caveats:

*   The widget should reasonably resemble the included design [mockup](comp.png) and account for different screen sizes/devices.
*   The sort buttons are meant to be functional and should update the order of the properties when clicked. Note that only one of these buttons should be active at a time.
*   The widget should function in the latest versions of Microsoft Edge, Chrome and iOS/Android browsers.
*   Please use HTML, CSS and Javascript where applicable

Feel free to use any front end libraries/tools that you would like, but make sure that the final product is uploaded to Hackerrank and is buildable from any local machine.  Thank you and good luck!

### Mockup

![Real Estate Listing Widget](comp.png)

### The App component holds the app bar(material-ui component) and the buttons component (price, beds, sqft)
* on page load App will render a GridList with 2 columns of 4 GridTiles each

### The NavBar component is a component that handles the sorting functionality and clicking of each button
* each button has its own sorting function that sorts the values and sets the state
* handleParse parses each of the values from strings to numbers
* lifecycle hook componentWillMount calls the handleParse function
* each buttons individual function gets called in an onClick property of the button

### The GridList component will receive props from the NavBar component
* depending on the props received (which depends on the button that gets clicked on), the GridList component will render a GridList with sorted GridTiles that are organized and sorted by the property of the button clicked on.

### to build and use the 'widget' (ps. widgets are not a thing, this is a view I built with components)
* clone the repo
* cd into the repo
* run yarn install from the terminal
* run npm run watch and in your browser (chrome is preferred because dev tools) go to http://localhost:8080/
