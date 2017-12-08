import React from 'react';
import { GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import data from '../../lib/data';
import GridListContainer from '../grid-list';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort() {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }
  // data.sort
  // sort by price
  // sort by beds
  // sort by size
  // return a new array, map over it and make them into grid tiles

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="sorting-buttons">
        <RaisedButton
          label="Price"
          style={style}
          onClick={this.handleSort}
        />
        <RaisedButton
          label="Beds"
          style={style}
        />
        <RaisedButton
          label="Sq. ft"
          style={style}
        />
        <GridListContainer
          onClick={() => {
            data.map(tile => (
              <GridTile
                key={tile}
                value={data}
              />
            ));
          }}
        />
      </div>
    );
  }
}

export default NavBar;
