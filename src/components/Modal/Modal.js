import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {

    let displayStyle = 'none';

    if(props.show === true)
        displayStyle = 'none'
    else
        displayStyle = 'block';
    
    const style = {
        display: displayStyle
    }    

    return  (
        <div className={classes.Modal}>
            <div className={classes.ModalContent}>
                {props.children}
            </div>
            
        </div>
    )
}

export default modal;