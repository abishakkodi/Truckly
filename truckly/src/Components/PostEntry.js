const React = require('react');

class PostEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false
    };
  }

  render = () => {

    return(<div>
        <h4 onClick={this.toggleDescription}> {this.props.info.brand} {this.props.info.model} </h4>
        <div>
          {this.state.showDescription?
            <ul>
              <li> Model Year: {this.props.info.year} </li>
              <li> Owned by: {this.props.info.owner}</li>
              <li> Location: {this.props.info.location}</li>
              <li> Cost to Rent {this.props.info.price}</li>
            </ul> : null}
        </div>
      </div>
      )
  }

  toggleDescription = () => {
    var toggle = !this.state.showDescription;
    this.setState({showDescription: toggle});
  }

}

export default PostEntry;