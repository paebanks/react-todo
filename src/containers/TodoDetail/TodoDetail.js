import React, { Component } from 'react';
//import TodoForm from '../TodoForm/TodoForm';
import {connect} from 'react-redux';

import classes from './TodoDetail.module.css';

/*
* Grab id from route parameter
* Map props for this component to todo item with
* the id in redux store
*/
const mapStateToProps = (state, ownProps) =>{
    //console.log('[mapStateToProps]');
    //console.log(ownProps);
    const thisID = +ownProps.match.params.id;
    const thisTodo = state.todoItems.filter(todo => todo.id === thisID)[0];
    //console.log(thisTodo);
    return{
        todoItem: thisTodo
    }
}

/*
* Map function to be exeecuted when editing a todo item
*/
const mapDispatchToProps = (dispatch) => {

    return {
        onEditTodo: (id, name) => dispatch({type: 'EDIT_TODO', update: {id: id, name: name}})
    }

}

class TodoDetail extends Component{

    state = {
        showEdit: false
    }

    
    toggleEdit = () => {
        this.setState((prevState, props) =>{
            return {showEdit: true }  
        })
    }

    handleUpdate = (val) => {
        this.setState((prevState, props) =>{
            return {showEdit: false }  
        })
        if(val){
            this.props.onEditTodo(this.props.todoItem.id, val);
        }
    }

    handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            const newVal = event.target.value;
            this.handleUpdate(newVal);
            
        }
    }

    render(){
        /*
        * Allow user to edit todo item by clocking on div that displays todo item name
        * onClick render input field, render div with updated content on blur on enter
        * key pressed
        */
        let editForm = null;
        if(this.state.showEdit){
            editForm = (
                <div className={classes.TodoBody}>
                    <input type="text"
                           autoFocus  
                           defaultValue={this.props.todoItem.name}
                           ref = {(ip) => this.todoInput = ip}
                           onKeyPress={this.handleKeyPress}
                           onBlur={() => this.handleUpdate(this.todoInput.value)}/>
                </div>
            )
            
        }
        else{
            editForm = (
                <div className={classes.TodoBody}  onClick={this.toggleEdit}>{this.props.todoItem.name}</div>
            )
        }

        return (
            <div className={classes.Container}>
                {/* <div className={classes.Back}><i className="fa fa-arrow-left"></i></div> */}
                <div className={classes.Card}>
                
                    <div className={classes.TodoId}>{this.props.todoItem.id}</div>
                    {editForm}
                    {/*<span onClick={this.toggleEdit}><i className="fa fa-edit"></i></span>*/}
                    
                    <div className={classes.Footer}>
                        {this.props.todoItem.creationTime.toLocaleString()}
                        
                    </div>
                </div>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);