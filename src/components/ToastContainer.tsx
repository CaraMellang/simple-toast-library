import {ChatFloatingProps} from "../types";
import style from "../style/ChatFloating.css"
import {useState} from "react";
import styled from "@emotion/styled";

export function ToastContainer (props:any){

    return <ToastContainerWrapper onClick={()=>window.alert("와 이게 ")} ></ToastContainerWrapper>

}

const ToastContainerWrapper = styled.div``