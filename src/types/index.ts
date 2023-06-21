import React from "react";
//
// export interface ToastContentProps<Data = {}> {
//     closeToast?: () => void;
//     toastProps: ToastProps;
//     data?: Data;
// }
//
// export type ToastContent<T = unknown> =
//     | React.ReactNode
//     | ((props: ToastContentProps<T>) => React.ReactNode);
//
// export type Id = number | string;
// export  interface ToastProps{
//
// }
// export interface NotValidatedToastProps extends Partial<ToastProps> {
//     toastId: Id;
// }

//
//
//

export type Position =
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "top-center"

export type Type = 'default' | 'success' | 'error' | 'info' | 'warning';

export type ToastContent = string

export type ToastConfig = {
    backgroundColor?: string
    color?: string
}
export interface Toast {
    id: string
    content: ToastContent
    type: Type
    config?: ToastConfig
}

