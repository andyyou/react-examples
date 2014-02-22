/** @jsx React.DOM */
    var App = React.createClass({displayName: 'App',
      getInitialState: function () {
        return {userInput: ''};
      },
      handleKeyUp: function (e) {
        this.setState({userInput: this.getDOMNode().value});
        console.log(e); // 官方範例使用的 e.target.value 是錯誤的！
      },
      clearAndFocusInput: function (e) {
        this.setState({userInput: ''});
        this.refs.theInput.getDOMNode().focus();
        console.log(this.refs['cool'])
      },
      render: function () {
        return (
          React.DOM.div( {ref:"cool"}, 
            React.DOM.div( {onClick:this.clearAndFocusInput}, 
              " Click To Focus and Rest "
            ),
            React.DOM.input( {ref:"theInput",
                   value:this.state.userInput,
                   onKeyUp:this.handleKeyUp} )
          )
        );
      }
    });
    React.renderComponent(App(null ), document.getElementById('example'));