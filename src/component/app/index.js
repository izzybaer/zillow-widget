import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../nav-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const muiTheme = getMuiTheme({
      appBar: {
        height: 50,
        color: '#000000',
        backgroundColor: '#ffffff',
      },
    });
    const style = {
      backgroundColor: '#ffffff',
    };
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <AppBar
            style={style}
            titleStyle={{ backgroundColor: '#ffffff', color: '#000000' }}
            title="ZILLOW VS TRULIA"
            iconStyleLeft={{ backgroundColor: '#ffffff', color: '#000000' }}
            showMenuIconButton={false}
          />
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
