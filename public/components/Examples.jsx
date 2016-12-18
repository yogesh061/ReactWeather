var React = require('react');
var {Link}  = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples component</h3>
//     );
//   }
// });

var Examples = (props) => {
      return(
        <div>
          <h1 className="text-center page-title">Examples</h1>
          <p>Here are few examples to try out!</p>
          <ol>
            <li>
              <Link to='/?location=Pune'>Pune, IN</Link>
            </li>
            <li>
              <Link to='/?location=Mumbai'>Mumbai, IN</Link>
            </li>
          </ol>
        </div>
      );
}

module.exports = Examples;
