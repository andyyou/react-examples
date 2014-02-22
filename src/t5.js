 /** @jsx React.DOM */
/** @jsx React.DOM */
var Signin = React.createClass({
  render: function () {
    return (
      var name = '#{i18n("Welcome")}';
      <div className='signin-container'>
        <div className='sign-header'>
          <i className='fa fa-trello' />
          Passer {name}
        </div>
      </div>
    );
  }
});

React.renderComponent(<Signin />, document.getElementById('signin'));