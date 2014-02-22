 /** @jsx React.DOM */
      var Simple = React.createClass({displayName: 'Simple',
        render: function () {
          return (
            React.DOM.a( {href:"http://andyyou.logdown.com/"}, "AndyYou")
          );
        }
      });
      var Container = React.createClass({displayName: 'Container',
        render: function () {
          return (
            React.DOM.div(null, 
              React.DOM.li(null, Simple(null ), /* comment */)

            )
          );
        }
      });

      React.renderComponent(Container(null ), document.getElementById('content'));