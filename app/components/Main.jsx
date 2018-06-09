var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
         <Navigation/>
          <h1 className="text-center">Main.jsx rendered</h1>
        </div>
    )
};

module.exports = Main;