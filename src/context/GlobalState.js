import { createContext, useEffect, useReducer } from "react";
import { types } from "../types/types";
import { userReducer } from "./UserReducer";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
}

export const GlobalState = createContext();

export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    const createUser = (user) => {
        dispatch({
            type: types.create,
            payload: { ...user, id: uuidv4()}
        })
    }

    const deleteUser = (id) => {
        dispatch({
            type: types.delete,
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(state.users))
    }, [state])

    return (
        <GlobalState.Provider value={{
            users: state.users,
            createUser,
            deleteUser,
        }}>
            {children}
        </GlobalState.Provider>
    )
}