import styled from "@emotion/styled";
import {useToast} from "../hooks/useToast";
import {Transition} from "./Transition";

export function Toast(){
    const {isRunning, toastRef} = useToast()
    return <Transition>토스트</Transition>
}

