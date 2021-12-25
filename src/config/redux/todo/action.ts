import { getAllTodo } from "./service";

export const getTodo = () => async (dispatch: any) => {
    const results = await getAllTodo();

    dispatch({
        type: "GET_ALL_TODO",
        payload: results,
    });
};

export const createTodo = (data: Object) => async (dispatch: any) => {
    try {
        dispatch({
            type: "CREATE_TODO_OPEN",
        });
        dispatch({
            type: "CREATE_TODO",
            payload: data
        });
    } catch (error) {
        dispatch({
            type: "CREATE_TODO_CLOSE",
        });
    }
};


export const updateTodo = (id: Number, data: Object) => async (dispatch: any) => {
    try {
        dispatch({
            type: "UPDATE_TODO_OPEN",
        });
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                id,
                data
            },
        });
    } catch (error) {
        dispatch({
            type: "CREATE_TODO_CLOSE",
        });
    }
    
};

export const deleteTodo = (id: Number) => async (dispatch: any) => {
    dispatch({
        type: "DELETE_TODO",
        payload: id
    });
};