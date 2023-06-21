import {useCallback, useEffect} from "react";
import styled from "@emotion/styled";
import {useToastContainer} from "../hooks/useToastContainer";
import {Position} from "../types";
import {Event, eventManager} from "../core/eventManager";
import {toastDispatcher} from "../core/toastDispatcher";
import {Toast} from "./Toast";
import {Transition} from "./Transition";

interface Props{
    position?:Position;
    delay?:number
}

export function ToastContainer ({position, delay}:Props){
    const {toasts , dispatch} = useToastContainer()

    useEffect(()=>{
        toastDispatcher({dispatch, delay});

        return () => {
            eventManager.allOff()
        }
    },[dispatch, delay])

    const handleClose = useCallback(
        (id:string) => {
            eventManager.emit(Event.HIDE, id)
        },
        []
    )

    return (
        <ToastContainerWrapper>
            {toasts.map(r => (
                <Transition toasts={toasts} ownToastId={r.id} delay={delay} >
                    <Toast key={r.id} {...r} onClose={handleClose} />
                </Transition>
            ))}
        </ToastContainerWrapper>
    )

}

const ToastContainerWrapper = styled.div``