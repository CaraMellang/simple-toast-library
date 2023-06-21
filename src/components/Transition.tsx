import React, {useEffect, useState} from "react";
import {Toast} from "../types";

interface Props{
    children:React.ReactNode;
    toasts:Toast[];
    ownToastId:string;
    delay:number;
}

export function Transition({children, toasts, ownToastId, delay}:Props){
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        const isExistToast = toasts.filter(f => f.id === ownToastId)[0]
        if(!isExistToast){
            setTimeout(()=>{
                setIsRunning(false)
            },delay)
        }
    },[toasts])


    return<>{children}</>
}