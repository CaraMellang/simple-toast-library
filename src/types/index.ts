import React from "react";

export interface ToastContentProps<Data = {}> {
    closeToast?: () => void;
    toastProps: ToastProps;
    data?: Data;
}

export type ToastContent<T = unknown> =
    | React.ReactNode
    | ((props: ToastContentProps<T>) => React.ReactNode);

export type Id = number | string;
export  interface ToastProps{

}
export interface NotValidatedToastProps extends Partial<ToastProps> {
    toastId: Id;
}