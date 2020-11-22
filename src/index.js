import React from 'react';
import TodoApp from './page/todoApp'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configuerStore'

let store=configureStore({todolist:[{text:'事项1', completed:false, id:1}]})

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)

