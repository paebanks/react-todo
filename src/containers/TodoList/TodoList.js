import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';

import classes from './TodoList.module.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

/*
* Map prop of component to state (list of todo items)
*
*/
const mapStateToProps = (state) => {

    return {
        todos: state.todoItems
    };
}

/*
* Define actions to be executed when user creates or deletes a todo
*
*/
const mapDispatchToProps = (dispatch) => {

    return {
        onAddTodo: (name, creationTime) => 
            
            dispatch({type: 'ADD_TODO', todo: {name: name, creationTime:creationTime}}
        ),
        onRemoveTodo: (id) => dispatch({type: 'REMOVE_TODO', todoID: id})
        
    }
}


class TodoList extends Component{

    state = {
        showModal: false,
    }

    toggleModal = (event) => {
        event.stopPropagation();
        this.setState((prevState, props) =>{
            return {showModal: !prevState.showModal }  
        })

    }

    render(){

        return (
            
            <div className={classes.TodoList}>
                <TodoForm addTodo = {this.props.onAddTodo} type="Add"/>
                
                <ul>
                    {
                        this.props.todos.map(todo => (
                            <TodoItem
                                key={todo.id} 
                                name={todo.name}
                                id={todo.id}
                                creationTime={todo.creationTime} 
                                >
                                
                                <span onClick={() => this.props.onRemoveTodo(todo.id)}><i className="fa fa-trash"></i></span>
                                <Link to={"/todos/" + todo.id}><span><i className="fa fa-eye"></i></span></Link>
                                </TodoItem>
                        ))
                    }
                    
                </ul>
                {/* <button className={classes.Float} onClick={this.toggleModal}>
                    <i className="fa fa-plus"></i>
                </button> */}
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);