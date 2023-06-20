import {eventManager} from "./eventManager";
import {NotValidatedToastProps, ToastContent} from "../types";


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
function dispatchToast(content:any , options:NotValidatedToastProps){
    //컨테이너가 존재할 때.
    // if(containers.size > 0){
        eventManager.emit(content, generateToastId(),options);
    // }
    // else{
    //     queue.push({ content, options });
    // }

    return options.toastId;
}

function toast<TData = unknown>(
    content: ToastContent<TData>,
    options?: any
) {
    return dispatchToast(content, options)
}