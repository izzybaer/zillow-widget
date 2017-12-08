import React from 'react';
import { GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import data from '../../lib/data';
import GridListContainer from '../grid-list';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: null,
    };
    this.handleParse = this.handleParse.bind(this);
    this.handlePriceSort = this.handlePriceSort.bind(this);
    this.handleBedSort = this.handleBedSort.bind(this);
    this.handleSizeSort = this.handleSizeSort.bind(this);
  }

  componentWillMount() {
    this.handleParse(data);
  }

  handleParse(houses) {
    const parsedValues = houses.map((i) => {
      i.price = parseInt(i.price, 10);
      i.beds = parseInt(i.beds, 10);
      i.sqft ? i.sqft = parseInt(i.sqft, 10) : i.sqft = 0;
      return i;
    });
    this.setState({ dataSet: parsedValues });
  }
  handlePriceSort(houses) {
    const sortedPrice = houses.sort((a, b) => a.price - b.price);
    this.setState({ dataSet: sortedPrice });
  }

  handleBedSort(houses) {
    const sortedBeds = houses.sort((a, b) => a.beds - b.beds);
    this.setState({ dataSet: sortedBeds });
  }

  handleSizeSort(houses) {
    const sortedSize = houses.sort((a, b) => a.sqft - b.sqft);
    this.setState({ dataSet: sortedSize });
  }

  render() {
    const style = {
      margin: 12,
    };
    console.log('dataSet___STATE', this.state.dataSet);
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
