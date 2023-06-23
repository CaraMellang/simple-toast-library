import {ToastContent} from "../types";

export const enum Event {
    SHOW = 'show',
    HIDE = 'hide',
    HIDE_ALL = 'hideAll',
}
export type Handler<T = any> = (event: T) => void

export const eventManager = {
    events: new Map(),

    on<T = any>(event:Event,callback:Handler<T>){
        if(!this.events.has(event)) this.events.set(event, []);
        this.events.get(event).push(callback);
    },
    off<T = any>(event: Event){
        if(this.events.has(event)) this.events.delete(event);
    },

    emit<T = any>(event:Event , args ?: T){
        console.log('eventManager(Emit).' , this.events , args);
        if(!this.events.has(event)) return;
        this.events.get(event).forEach((callback:Handler)=> callback(args));
    },

    allOff(){
        this.events.clear();
    }
}