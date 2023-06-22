import {Toast} from "../types";
import {useReducer, useState} from "react";

export type ToastAction =
    | { type: "ADD"; toast: Toast}
    | { type: "REMOVING"; id:string}
    | { type: "REMOVE"; id:string}
    | { type: "REMOVE_ALL"};

interface ToastState {
    toasts:Toast[];
}
const initialState: ToastState = {
    toasts: [],
}

const toastReducer = (state: ToastState, action: ToastAction):ToastState => {
    switch (action.type){
        case "ADD":
            return {
                ...state,
                toasts:[...state.toasts, action.toast]
            }
        case "REMOVE":
            return {
                ...state,
                toasts: state.toasts.filter( toast => toast.id !== action.id )
            }
        case "REMOVE_ALL":
            return {
                ...state,
                toasts: []
            }
        default:
            throw new Error()
    }
}

export  function  useToastContainer(){
    // const [state, dispatch] = useReducer(toastReducer,initialState)
    const [toasts, setToasts] = useState<Toast[]>()

    const dispatch = (action: ToastAction) => {
        if(action.type === "ADD"){
            setToasts(prev => {
                if(!prev) return [action.toast]
                return [...prev , action.toast]
            })
        }
        else if(action.type === "REMOVING"){}
        else if(action.type === "REMOVE"){
            // toasts?.map(r => {
            //     if(r.id === action.id){
            //         setTimeout(() => {
            //
            //         }, 4000)
            //     }
            // })
            setToasts(prev => {
                if(!prev) return prev
                return prev.filter(toast => toast.id !== action.id)
            })
        }
        else if(action.type === "REMOVE_ALL"){
            setToasts(undefined)
        }
    }



    return {toasts:toasts , dispatch}
}