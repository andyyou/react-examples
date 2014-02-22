/** @jsx React.DOM */
React.createClass({
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Title"),
        React.DOM.a( {href:"http://andyyou.logdown.com/"}, "AndyYou Blog")
      )
    )
  }

})