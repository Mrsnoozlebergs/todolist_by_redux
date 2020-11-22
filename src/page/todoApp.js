import React, { Component } from 'react'
import Todolist from '../components/todolist/todolist'
import AddTodo from '../components/addtodo/addtodo'

class  TodoApp extends Component{
    constructor(props){
       super(props);
        this.state = {
        }
    }
    render() {

        return (
            <div className='component-TodoApp'>
                <AddTodo />
                <Todolist />
            </div>
        )
    }
}

export default TodoApp;