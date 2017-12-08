import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../nav-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceButton: {
        clicked: false,
        visible: true,
      },
      bedsButton: {
        clicked: false,
        visible: true,
      },
      sizeButton: {
        clicked: false,
        visible: true,
      },
    };
  }
  render() {
    const muiTheme = getMuiTheme({
      appBar: {
        height: 50,
        backgroundColor: 'white',
      },
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <AppBar title="superhero widget" />
          <BrowserRouter>
            <main>
              <NavBar />
              <Route exact path="/" />
              <h1>something</h1>
            </main>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
