/** @jsx React.DOM */
    var App = React.createClass({
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
          <div ref='cool'>
            <div onClick={this.clearAndFocusInput}>
              Click To Focus and Rest
            </div>
            <input ref='theInput'
                   value={this.state.userInput}
                   onKeyUp={this.handleKeyUp} />
          </div>
        );
      }
    });
    React.renderComponent(<App />, document.getElementById('example'));