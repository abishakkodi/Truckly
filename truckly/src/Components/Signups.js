const React = require('react');
const _ = require('underscore');

class Signups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "brand": '',
      "model": '',
      "year": '',
      "owner": '',
      "price": '',
      "picture": '',
      "location": '',
      "invalidFormat":false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  addToMongo = (obj) => {


  }

  handleChange = (e) => {
    e.preventDefault();
    var key = e.target.name;
    var obj = {};
    obj[key] = e.target.value
    this.setState(obj);
  }

  invalidate = () => {
    this.setState({invalidFormat: true});
  }

  submitData = (e) => {
    e.preventDefault();
    console.log(this.validateInput());

  }

  validateInput = () => {
    var validator = true;
    var filteredStateObj = _.omit(this.state,["invalidFormat"]);
    var filteredInput = _.values(filteredStateObj);

    if(_.contains(filteredInput, '')) {
      return false;
    }

    if(isNaN(parseInt(this.state.year, 10))|| isNaN(parseInt(this.state.price, 10)) ) {
      return false;
    }


    return true;
  }

  render = () => {

    var unfilteredKeys = _.keys(this.state);
    var filter =["invalidFormat"]; //add the items you want filtered out of keys here
    var keys = _.filter(unfilteredKeys, (descriptor) => {
      return !filter.includes(descriptor);
    });

    return (
        <div>
          <h2>
            Sign Up for Truckly!
          </h2>
            {this.state.invalidFormat? <div className='invalid'>Please Use a valid format </div> : null}

            <form onSubmit={this.submitData}>
              {
                keys.map((key, index) => {
                  return (
                    <div key={index}>
                    <section className='container'>
                      <div className='one'>{this.capitalize(key)}:</div>

                      <div className='two'>
                      <input type='text' placeholder={key} value={this.state.key} onChange={this.handleChange} name={key}/>
                      </div>

                      </section>
                    </div>)
                })
              }
              <input type='Submit' defaultValue='Submit Post'/>
            </form>
        </div>
    );
  }

}


export default Signups;