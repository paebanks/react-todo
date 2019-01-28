/* Redux store
* Defines an initial state and the actions that are executed 
* by components
*/
const initialState = {
    uniqueID: 1,
    todoItems: []
}

const reducer = (state = initialState, action) =>{

    switch (action.type){
        case 'ADD_TODO':
            console.log('[Reducer] ADD_TODO action called');
            /*
            * Update state immutably
            * Make copy of previous state, concat new item, set state to modified copy
            */ 
            const newTodo = {
                id: state.uniqueID,
                name: action.todo.name,
                creationTime: action.todo.creationTime
            }

            return {
                ...state,
                uniqueID: state.uniqueID + 1,
                todoItems: state.todoItems.concat(newTodo)
            }
          
        case 'REMOVE_TODO':
            
            return {
                ...state,
                todoItems: state.todoItems.filter(t => t.id !== action.todoID)
            }
          
        case 'EDIT_TODO':
            const todoIndex = state.todoItems.findIndex(todo => { return todo.id === action.update.id })
            
            const updatedTodo = {
                ...state.todoItems[todoIndex]
            }

            updatedTodo.name = action.update.name;

            const updatedTodoItems = [...state.todoItems];
            updatedTodoItems[todoIndex] = updatedTodo;

            return {
                ...state,
                todoItems: updatedTodoItems
            }

        default:
            console.log('[Reducer] No action specified');
            
        
    }
    return state;
}

export default reducer;