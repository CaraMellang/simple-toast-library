import styled from "@emotion/styled";
import {useToast} from "../hooks/useToast";
import {Toast as ToastType } from "../types";

interface Props extends ToastType {
    onClose: (id: string) => void
}
export function Toast({
      id,
      content,
      type,
      config: { backgroundColor, color } = {},
      onClose
    }:Props){


    return <ToastContainer>{id}번 토스트</ToastContainer>
}

const ToastContainer = styled.div`
  padding: 12px 18px;
  background-color: #009c72;
  color: white;
`
