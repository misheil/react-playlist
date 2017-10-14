var React = require('react');
var createReactClass = require('create-react-class');
require('./css/todoitem.css');


//Create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item} - OK</span>
                     <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
      },

      //Custom functions
      handleDelete: function(){
          this.props.onDelete(this.props.item);
      }
});

module.exports=TodoItem;
