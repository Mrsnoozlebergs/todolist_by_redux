import React, { Component } from 'react'  
import './todo.css'  
//import * as actions from './storeModel/actionCreater'

/**
 * @description daibanshixiang
 * @params todo,onClick
 */
class Todo extends Component  {
    constructor(props){
       super(props);
        this.state = {
        }
    }
    render() {
        const {todo, onClick}=this.props
        return (
            <div 
                className='component-todo' 
                style={{
                    textDecoration: todo.completed ? 'line-through':'none'
                }}
                onClick={onClick}>
                {todo.text}
            </div>
        )
    }
}

export default Todo;