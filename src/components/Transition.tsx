import React, {useEffect, useState} from "react";
import {Toast} from "../types";

interface Props{
    children:React.ReactNode;
    toasts:Toast[];
    ownToastId:string;
    delay?:number;
}

export function Transition({children, toasts, ownToastId, delay}:Props){
    const [isRunning, setIsRunning] = useState(false);

    return<>{children}</>
}