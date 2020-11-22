let id=2
const todo=(state=[],action)=>{
    console.log('state is',state)
    switch(action.type){
        case 'TOGGLE_TODO':
            return state.map(item=>(item.id===action.id)?{...item,completed: !item.completed}:item)
        case 'ADD_TODO':
            return [...state,{completed:false,text: action.data,id: ++id}]
        default:
            return state
    }
}

export default todo