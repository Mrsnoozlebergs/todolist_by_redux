import React, { Component } from 'react'
import {addtodo} from '../../action/addtodo'
import { connect } from 'react-redux'

class  AddTodo extends Component{
    constructor(props){
       super(props);
        this.state = {
            value: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <div className='component-AddTodo'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <input type='submit' value='OK' />
                </form>
            </div>
        )
    }
}

const mapState = () => ({
    
})

const mapDispatch = (dispatch) => ({
    onSubmit: (payload)=>{
        dispatch(addtodo(payload))
    }
})

export default connect(mapState, mapDispatch)(AddTodo);