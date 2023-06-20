import {useRef, useState} from "react";

export function useToast(){
    const [isRunning , setIsRunning] = useState(false);
    const toastRef = useRef<HTMLDivElement>(null)

    return {isRunning, toastRef}

}