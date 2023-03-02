import React from 'react';

const liStyle = {
    // position:'relative',
    padding: '5px',
    letterSpacing: '1px'
}

const buttonStyle = {
    // position:'absolute',
    backgroundColor: '#746AB0',
    color: '#E389B9',
    fontSize: '12px',
    fontWeight: '700',
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    marginLeft: '15px'
}

function TodoCard(props) {
    // return (
    //     <li>{props.title} 
    //       <button onClick={()=> {props.clickToDelete(props.index)}}>Delete</button> 
    //     </li>
    // )

    //shorthand for 'props' or destructuring 'props'
    const { title, clickToDelete, index } = props;
    return (
        <li style={ liStyle }>{title} 
            <button style={ buttonStyle } onClick={()=> {clickToDelete(index)}}>Delete</button>
        </li>
    )
}

export default TodoCard;