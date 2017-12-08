import React from 'react';
import { GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import data from '../../lib/data';
import GridListContainer from '../grid-list';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: data,
    };
    this.handlePriceSort = this.handlePriceSort.bind(this);
    this.handleBedSort = this.handleBedSort.bind(this);
    this.handleSizeSort = this.handleSizeSort.bind(this);
  }

  handlePriceSort(houses) {
    const parsedPrice = houses.map((i) => {
      i.price = parseInt(i.price, 10);
      return i;
    });
    const sortedPrice = parsedPrice.sort((a, b) => a.price - b.price);
    this.setState({ dataSet: sortedPrice });
  }

  handleBedSort(houses) {
    const parsedBeds = houses.map((i) => {
      i.beds = parseInt(i.beds, 10);
      return i;
    });
    const sortedBeds = parsedBeds.sort((a, b) => a.beds - b.beds);
    this.setState({ dataSet: sortedBeds });
  }

  handleSizeSort(houses) {
    const parsedSize = houses.map((i) => {
      i.sqft = parseInt(i.sqft, 10);
      return i;
    });
    const sortedSize = parsedSize.sort((a, b) => a.sqft - b.sqft);
    this.setState({ dataSet: sortedSize });
  }

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="sorting-buttons">
        <RaisedButton
          label="Price"
          style={style}
          onClick={() => { this.handlePriceSort(this.state.dataSet); }}
        />
        <RaisedButton
          label="Beds"
          style={style}
          onClick={() => { this.handleBedSort(this.state.dataSet); }}
        />
        <RaisedButton
          label="Sq. ft"
          style={style}
          onClick={() => { this.handleSizeSort(this.state.dataSet); }}
        />
        <GridListContainer
          data={this.state.dataSet}
        />
      </div>
    );
  }
}

export default NavBar;
