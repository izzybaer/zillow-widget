import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
// import data from '../../lib/data';
import { handleData } from '../nav-bar';

class GridListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  render() {
    const style = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '40%',
        height: '100%',
        overflowY: 'auto',
      },
      gridTile: {
        width: 300,
        height: 200,
      },
    };
    console.log('dataSet', this.props.dataSet)
    return (
      <div className="grid-list-container" style={style.root}>
        <GridList
          data={this.props.dataSet}
          cellHeight={180}
          cols={2}
          style={style.gridList}
        >
          {this.props.data.map((tile, i) => {
            return (
              <GridTile
                key={i}
                cols={4}
                rows={1.5}
                style={style.gridTile}
                title={tile.price}
                subtitle={tile.sqft}
              />
            );
          })}
        </GridList>


      </div>
    );
  }
}

export default GridListContainer;
