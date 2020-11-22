import React, { Component } from 'react'
import Todo from './todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../../action/todolist'
//import * as actions from './storeModel/actionCreater'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { todolist, onClick } = this.props
        console.log('the todolist props is',this.props)
        console.log('aaaaaa', todolist)
        return (
            <div className='component-todolist'>
                <div className='todoCompleted'>
                    Active:
                    {
                        todolist.map((todo) => {
                            if (!todo.completed) {
                                return <Todo todo={todo} onClick={() => { onClick(todo.id); console.log('lalalal') }} key={todo.id} />
                            } else return null
                        })
                    }
                </div>
                <div className='todoActive'>

                    Completed:
                    {
                        todolist.map((todo) => {
                            if (todo.completed) {
                                return <Todo todo={todo} onClick={() => { onClick(todo.id); console.log('lalalal') }} key={todo.id} />
                            } else return null
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapState = ({ todolist }) => ({
    todolist
})
const mapDispatch = (dispatch) => ({
    onClick: id => { dispatch(toggleTodo(id)) }
})
export default connect(mapState, mapDispatch)(Todolist);