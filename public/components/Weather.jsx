var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal  = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      isLoading: false
    }
  },

  handelSearch: function(location){
    var that = this;
    debugger;
    this.setState({
      isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
    }, function(err){
        that.setState({
          isLoading: false,
          location: null,
          temp: null,
          errorMessage: err.message
        });
    });

  },
  componentDidMount:  function(){
    var location  = this.props.location.query.location;
    if(location && location.length > 0){
      this.handelSearch(location);
      window.location.hash  = '#/';
    }
  },
  componentWillReceiveProps:  function(newProps){
    var location  = newProps.location.query.location;
    if(location && location.length > 0){
      this.handelSearch(location);
      window.location.hash  = '#/';
    }
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage () {
      if(isLoading){
          return <h3 className="text-center">Fetching Weather!</h3>
      }else if(temp && location){
          return <WeatherMessage temp = {temp} location = {location}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage  === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch = {this.handelSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
