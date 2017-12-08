import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import ZillowData from '../lib/zillow';
import TruliaData from '../lib/trulia';

class GridList extends React.Component {
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
    };

    // const zillowList = {this.props.data}
    // const truliaList = {}
    return (
      <div className='grid-list' style={style.root}>
        <GridList
          cellHeight={180}
          style={style.gridList}
          >
            <ZillowData />

          </GridList>


      </div>
    );
  }
}

export default GridList;
