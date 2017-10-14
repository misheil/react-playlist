var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');
var TodoItem=require('./todoitem');
var AddItem=require('./additem');


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
                  return(<TodoItem key={index} item={item} onDelete={this.onDelete}  />);
        }.bind(this));

        return(
          <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>
                    <li>{this.state.age}</li>
                    {todos}
                     <AddItem onAdd={this.onAdd} />
                </ul>
            </div>
        );
    },

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },

    componentWillMount: function(){
      console.log('componentWillMount');
    },

    componentDidMount: function(){
      console.log('componentDidMount');
      //  alert('aa');
    },

    componentWillUpdate: function(){
      console.log('componentWillUpdate');

    }

});



ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
