const React = require('react');
const _ = require('underscore');
const axios = require('axios');

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
      "invalidFormat":false,
      "submitted": false

    };

    this.handleChangeOfState = this.handleChangeOfState.bind(this);

  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ignoredKeys = () => {
    const ignored = ["invalidFormat", "submitted"];
    return ignored;

  }

  addToMongo = (obj) => {
    axios.post('http://localhost:4001/api/trucks', obj)
    .then((response)=>{
      console.log(' Added to Mongo');
      console.log(response);
    })
    .catch((error)=> {
      console.log('Ya done goofed');
      console.log(error);
    });

    console.log(obj);

  }

  handleChangeOfState = (e) => {
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
    if(this.validateInput()) {
      this.addToMongo(_.omit(this.state, this.ignoredKeys()));
    } else {
      this.invalidate();
    }

  }

  validateInput = () => {
    var filteredStateObj = _.omit(this.state,this.ignoredKeys());
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
    var filter =this.ignoredKeys(); //add the items you want filtered out of keys here
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
                      <input type='text' placeholder={key} value={this.state.key} onChange={this.handleChangeOfState} name={key}/>
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