import React, { Component } from 'react';
//import Modal from '../../components/Modal/Modal';
import classes from './TodoForm.module.css';



/*const mapDispatchToProps = (dispatch) => {

    return {
        onAddTodo: (name, creationTime) => 
            
            dispatch({type: 'ADD_TODO', todo: {name: name, creationTime:creationTime}}
        ),
        onEditTodo: (id, name) => dispatch({type: 'EDIT_TODO', update: {id: id, name: name}})
    }
}*/


class TodoForm extends Component {

    state = {
        name: '',
        timeCreated: ''
    }

    todoNameHandler = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    addNewTodo = (name) => {
        //call dispatch action in reducer only if todo input is not blank
        if(name){
            this.props.addTodo(name, new Date()); 
        }

        this.todoInput.value = '';
        this.setState({
            name: ''
        })

    }

    handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            const todoName = event.target.value;
            this.addNewTodo(todoName);
            
        }
    }

    render(){
        
        const btnLabel = this.props.type || 'Add';


        return (
            <div className={classes.TodoInputGroup}>
            
            <input type="text" 
                   className={classes.TodoField} 
                   name="description" 
                   id="description" 
                   onChange={this.todoNameHandler}
                   onKeyPress={this.handleKeyPress}
                   placeholder="Enter todo"
                   ref = {(inp) => this.todoInput = inp}
                   />
            <button className={classes.NewTodo}
                onClick = {() => this.addNewTodo(this.state.name)}>
                {btnLabel}
            </button>
            </div>

        );
    }
}

//export default connect(null, mapDispatchToProps)(TodoForm);
export default TodoForm;