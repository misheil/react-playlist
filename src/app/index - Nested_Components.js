var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create a component
var TodoComponent = createReactClass({
  getInitialState: function(){
       return {
           todos: ['wash up', 'eat some cheese', 'take a nap','New List'],
           age:30
       }
   }, //getInitialState

    render: function(){
var ager=setTimeout(function(){
  this.setState({
    age:40
  });
}.bind(this),5000);

var todos = this.state.todos;
        todos = todos.map(function(item, index){
                  return(<TodoItem key={index} item={item} />);
        });

        return(
          <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>
                    <li>{this.state.age}</li>
                    {todos}
                </ul>
            </div>
        );
    }
});



//Create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item} - OK</span>
                </div>
            </li>
        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
