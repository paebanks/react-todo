import React from 'react';
import classes from './TodoItem.module.css';

const todoitem = (props) => {
    return (
        <li>
                {props.name}
                                   
                {props.children}
           
        </li>
    )

}

export default todoitem;