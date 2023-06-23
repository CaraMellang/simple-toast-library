import {Event, eventManager} from "./eventManager";
import {Toast, ToastConfig, ToastContent, Type} from "../types";


let containers = new Map();
let latestInstance;
let queue = [];
let TOAST_ID = 1;

function generateToastId(){
    return ++TOAST_ID;
}

function getToastId(){
    return TOAST_ID;
}

//컨테이너가 없으면 여기서 자체 큐스택에 저장됨.
// function dispatchToast(content:any , options: any){
    //컨테이너가 존재할 때.
    // if(containers.size > 0){
    //     eventManager.emit(content, generateToastId(),options);
    // }
    // else{
    //     queue.push({ content, options });
    // }

    // return options.toastId;
// }

// function toast<TData = unknown>(
//     content: ToastContent<TData>,
//     options?: any
// ) {
//     return dispatchToast(content, options)
// }

interface  generateToast {
    content: ToastContent;
    type: Type;
    config?: ToastConfig;
}

export const generateToast = ({content, type, config}:generateToast):Toast => {
    return {
        id:`${++TOAST_ID}`,
        content,
        type,
        config
    }
}


const hangingToast = ({...toast}: generateToast) => eventManager.emit(Event.SHOW , generateToast(toast));

export const toast = (content: ToastContent, config?: ToastConfig) => hangingToast({ content, type: "default", config});
toast.success = (content: ToastContent, config?: ToastConfig) => hangingToast({ content, type: "success", config});
toast.error = (content: ToastContent, config?: ToastConfig) => hangingToast({ content, type: "error", config});
toast.info = (content: ToastContent, config?: ToastConfig) => hangingToast({ content, type: "info", config});
toast.warning = (content: ToastContent, config?: ToastConfig) => hangingToast({ content, type: "warning", config});
toast.clearAll = () => eventManager.emit(Event.HIDE_ALL);