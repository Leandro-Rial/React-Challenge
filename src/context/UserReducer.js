import { types } from "../types/types";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case types.create:
            
            return {
                ...state,
                users: [action.payload, ...state.users]
            };
        
        case types.delete:
            
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            };

        default:
            return state;
    }
}