var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
         <Navigation/>
          <h1 className="text-center">Main.jsx rendered</h1>
          {props.children}
        </div>
    )
};

module.exports = Main;