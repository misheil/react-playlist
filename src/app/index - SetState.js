var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create a component
var TodoComponent = createReactClass({
  getInitialState: function(){
       return {
           todos: ['wash up', 'eat some cheese', 'take a nap'],
           age:30
       }
   }, //getInitialState
    render: function(){
var ager=setTimeout(function(){
  this.setState({
    age:40
  });
}.bind(this),5000);

        return(
          <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>
                    <li>{this.state.age}</li>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
