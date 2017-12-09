import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

class GridListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        overflowY: 'auto',
      },
      gridTileStyle: {
        width: 448,
        height: 170,
        border: '1px solid grey',
      },
    };

    return (
      <div className="grid-list-container" style={style.root}>
        <GridList
          data={this.props.dataSet}
          cellHeight={180}
          cols={2}
          padding={4}
          style={style.gridList}
        >
          {this.props.data.map((tile, i) => {
            return (
              <GridTile
                key={i}
                cols={1}
                rows={1.5}
                style={style.gridTileStyle}
              >
                { <img src={`${tile.img}`} alt="" style={{ float: 'left', height: '100px', width: '100px' }} /> }
                { `${Object.values(tile).join(' ').split(' \n')}` }
              </GridTile>
            );
          })}
        </GridList>


      </div>
    );
  }
}

export default GridListContainer;
