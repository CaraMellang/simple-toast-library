import {ToastContent} from "../types";

export const enum Event {
    Show,
    Clear,
    DidMount,
    WillUnmount,
    Change,
    ClearWaitingQueue
}
export const eventManager = {
    list: new Map(),
    emitQueue: new Map(),


    emit(content :ToastContent,TOAST_ID:number , ...args: any[]){
        this.emitQueue.set(TOAST_ID, {content , status:"RUNNING"})
        const timer = setTimeout(()=>{
            if(this.emitQueue.has(TOAST_ID)){
                this.emitQueue.set(TOAST_ID , {content , status:"STOPPED"})
                setTimeout(()=>{
                    if(this.emitQueue.has(TOAST_ID)){
                        this.emitQueue.delete(TOAST_ID)
                    }
                },3000)
            }
        },5000)
    },

    callBackEmit(event:Event , callback: any){
        setTimeout(()=>{
            callback()
        },0)

    }
}