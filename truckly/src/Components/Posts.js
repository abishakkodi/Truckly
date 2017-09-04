import PostEntry from './PostEntry.js';
const React = require('react');

class Posts extends React.Component {

  render = () => {

    return(
      <div>
        <h3>
          Trucks Available
        </h3>
        <div>
          {this.props.data.map((truck) => <PostEntry key={truck._id} info={truck}/>
          )
        }
        </div>
      </div>);
  }


}

export default Posts;

