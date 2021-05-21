import {createContext, useReducer} from 'react'
import instance from "../api/api.config"
const initialState = {
    users:[],
    postUserData: () => {}
};

const appReducer = (state: any, action:any) =>{
switch (action.type) {
    case 'POST_USERS':
        return {...state, users:[action.payload]}
    default:
        return state;
}
}

export const GlobalContext = createContext<InitialState>(initialState)

export const GlobalProvider: React.FC= ({children}) =>{
    const [state,dispatch] = useReducer(appReducer, initialState);

    const postUserData = async (user:object) =>{
        try {
            let { data } = await instance.post('/user', user);
            console.log(data);
            dispatch({ type: 'GET_SINGLE_PRODUCT', payload: data });
          } catch (e) {
            console.log(e);
          }
        };
    
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            postUserData
        }}>
            {children}
        </GlobalContext.Provider>
    )
    }