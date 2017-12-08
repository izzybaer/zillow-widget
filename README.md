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

### The App component holds the app bar and the buttons component (price, beds, sq. ft)
* on page load App will render a GridList with 2 columns of 4 GridTiles each, one column will be tiles with data from Zillow and the other column will be tiles with data from Trulia.
* each button has identifying props and handleClick functionality
* each button will have props and initial state will be set to false
  * onClick of one button we set the State to true for that button but keep the other two false
  * onClick render a new view, with the tiles sorted by the property of the button clicked on

### The Buttons component is a component that handles the sorting functionality and clicking of each button
* each button has visible: true and clicked: false by default, so that on page load each button is visible but has not yet been clicked on
* the buttons component will have a handleClick function that sets the State onClick depending on the button clicked.

### The GridList component will receive props from the Buttons component
* depending on the props received (which depends on the button that gets clicked on), the GridList component will render a GridList with sorted GridTiles that are organized and sorted by the property of the button clicked on.
* if the price button is clicked on, the handleClick function will set the State of the price to true
