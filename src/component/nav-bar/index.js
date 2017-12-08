import React from 'react';
import { GridTile, GridList } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import data from '../../lib/zillow'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    e.preventDefault();
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }
  // handleClick(i) {
  //   const tiles = this.state.tiles.slice();
  //   tiles[i] = 'X';
  //   this.setState({ tiles: tiles });
  // }


  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="sorting-buttons">
        <RaisedButton
          label="Price"
          style={style}
        />
        <RaisedButton
          label="Beds"
          style={style}
        />
        <RaisedButton
          label="Sq. ft"
          style={style}
        />
      </div>
    );
  }
}

export default NavBar;
