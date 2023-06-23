import {ToastAction} from "../hooks/useToastContainer";
import {Event, eventManager} from "./eventManager";
import {Toast} from "../types";


interface ToastDispatcher{
    dispatch: (value: ToastAction) => void
    delay?: number

}
export const toastDispatcher = ({dispatch, delay}:ToastDispatcher) => {
    eventManager.on(Event.SHOW, (toast: Toast) => {
        dispatch({type:"ADD" , toast});
        console.log("is this event run?", toast);
        if (delay){
            dispatch({type:"REMOVING" , id: toast.id})
            setTimeout(()=>{
                dispatch({type:"REMOVE", id: toast.id})
            },delay)
        }
    })

    eventManager.on(Event.HIDE, (id: string) => dispatch({type: "REMOVE", id}));
    eventManager.on(Event.HIDE_ALL, () => dispatch({type:"REMOVE_ALL"}))

}