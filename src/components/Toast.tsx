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


    return <div>토스트</div>
}

