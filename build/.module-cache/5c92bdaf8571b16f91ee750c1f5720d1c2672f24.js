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
              React.DOM.div(null, 'First ' + String.fromCharCode(183) + ' #{i18n("ABC")}')

            )
          );
        }
      });

      React.renderComponent(Container(null ), document.getElementById('content'));