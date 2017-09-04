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
            <div className='entry'>
              <p> Model Year: {this.props.info.year} </p>
              <p> Owned by: {this.props.info.owner}</p>
              <p> Location: {this.props.info.location}</p>
              <p> Cost to Rent: ${this.props.info.price} per hour</p>
              </div>
            : null}
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