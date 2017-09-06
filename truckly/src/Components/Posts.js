import PostEntry from './PostEntry.js';
const React = require('react');

class Posts extends React.Component {

  render = () => {
    return(
      <div>
        <h3 className='listTitle'>
          Trucks Available
        </h3>
        <h4 className='instructions'> insTRUCKtions: <br/> Click on a truck for more info </h4>
        <div className="list">
          {this.props.data.map((truck) => <PostEntry key={truck._id} info={truck}/>
          )
        }
        </div>
      </div>);
  }

}

export default Posts;

