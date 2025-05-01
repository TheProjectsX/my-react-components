import { ReactElement, InputHTMLAttributes, ReactNode } from "react";

export interface DynamicInputProps {
    handleAddItem: () => void;
    handleUpdateRecord: (idx: number, value: any) => void;
    handleRemoveItem: (idx: number) => void;
    inputtedValues: any[];
    className?: string;
    addButtonLabel?: ReactNode | null;
    customAddButton?: ReactElement<any, any> | null;
    customInput?: ReactElement<InputHTMLAttributes<HTMLInputElement>> | null;
    customRemoveButton?: ReactElement<any, any>;
    addButtonDisabled?: boolean;
    removeButtonsDisabled?: boolean;
}

declare const useDynamicInput: (config?: {
    defaultCount?: number;
    minItems?: number;
    maxItems?: number | null;
}) => {
    DynamicInput: (props: {
        className?: string;
        addButtonLabel?: ReactNode | null;
        customAddButton?: ReactElement<any, any> | null;
        customInput?: ReactElement<
            InputHTMLAttributes<HTMLInputElement>
        > | null;
    }) => JSX.Element;
    values: any[];
    handleAddItem: () => void;
    handleRemoveItem: (idx: number) => void;
};

export default useDynamicInput;
