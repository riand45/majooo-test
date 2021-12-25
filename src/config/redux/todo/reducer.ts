import { AnyAction } from "redux";
import { updateTodo } from "./update";

const initialState: any = {
    create: true,
    data: []
}

const todoReducer = (state:any = initialState, action: any): AnyAction => {
    switch (action.type) {
        case "GET_ALL_TODO":
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        case "CREATE_TODO_OPEN":
            return {
                ...state,
                create:true
            }
        case "CREATE_TODO":
            return {
                ...state,
                create: false,
                data: [
                    ...state.data, {
                        ...action.payload,
                        id: state.data.length + 1,
                        createdAt: new Date().toUTCString(),
                    }
                ]
            }
        case "CREATE_TODO_CLOSE":
            return {
                ...state,
                create:true
            }
        case "UPDATE_TODO_OPEN":
            return {
                ...state,
                update:true
            }
        case "UPDATE_TODO":
            return {
                ...state,
                update: false,
                data: updateTodo(state.data,action.payload)
            }
        case "UPDATE_TODO_CLOSE":
            return {
                ...state,
                update: false
            }
        case "DELETE_TODO":
            return {
                ...state,
                delete: false,
                data: state.data.filter((data: any) => data.id !== action.payload)
            };
        default: 
            return state;
    }
}

export default todoReducer;