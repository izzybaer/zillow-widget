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

### The App component holds the app bar, the three sorting buttons (price, beds, sq. ft)

* each button is a component (price-button, beds-button, size-button)
* each button has handleClick functionality
  * onClick we set the State
  * onClick render a new view, with the tiles sorted by the property clicked on

### The 
