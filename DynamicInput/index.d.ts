import * as React from "react";

export interface DynamicInputProps {
    onChange: (values: string[]) => void;
    children?: (
        inputProps: {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
            defaultValue: string;
        },
        removeButtonProps: {
            onClick: (e: React.MouseEvent<HTMLElement>) => void;
            disabled: boolean;
        }
    ) => React.ReactElement;
    defaultValues?: string[];
    defaultItemsCount?: number;
    minItems?: number;
    maxItems?: number | null;
    className?: string;
    addButtonLabel?: React.ReactNode | null;
    customAddButton?: React.ReactElement<any, any> | null;
}

declare const DynamicInput: React.FC<DynamicInputProps>;
export default DynamicInput;
