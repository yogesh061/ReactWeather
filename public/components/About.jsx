var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return(
    <div>
        <h1 className="text-center">About</h1>
        <p>This is a Weather application build on React JS.</p>
        <p>
          Here are some of the tools I used:
        </p>
        <ol>
          <li>
            <a href="https://facebook.github.io/react/">React</a>- This was the javascript framework used.
          </li>
          <li>
            <a href="https://openweathermap.org/">Open Weather Map</a>- Open source weather map.
          </li>
        </ol>
    </div>

  );
}

module.exports = About;
