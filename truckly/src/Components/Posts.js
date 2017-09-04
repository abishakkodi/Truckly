import PostEntry from './PostEntry.js';
const React = require('react');

class Posts extends React.Component {

  render = () => {

    return(
      <div>
        <h3>
          Posts Component
          {this.props.data.map((truck) => <PostEntry key={truck._id} info={truck}/>
          )
        }
        </h3>
      </div>);
  }


}

export default Posts;

