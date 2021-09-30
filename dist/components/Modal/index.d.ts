import React, { ReactNode } from "react";
declare type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    styles?: {
        container?: React.CSSProperties;
        content?: React.CSSProperties;
    };
    classeNames?: {
        container?: string;
        content?: string;
    };
    ids?: {
        container?: string;
        content?: string;
    };
};
export declare function Modal({ children, isOpen, styles, classeNames, ids }: ModalProps): JSX.Element;
export {};
