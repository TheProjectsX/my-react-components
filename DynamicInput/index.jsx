import React, { useEffect, useState } from "react";

const DynamicInput = ({
    onChange,
    children: CustomElement,
    defaultItems = 2,
    minItems = 0,
    maxItems,
    className = "",
    addButtonLabel = "Add More",
    customAddButton,
}) => {
    const [values, setValues] = useState(new Array(defaultItems).fill(""));

    const handleUpdateRecord = (idx, value) => {
        setValues((prev) =>
            prev.map((currentValue, currentIdx) =>
                currentIdx === idx ? value : currentValue
            )
        );
    };

    const handleAddItem = () => {
        if (maxItems && values.length >= maxItems) return;
        setValues((prev) => [...prev, ""]);
    };

    const handleRemoveItem = (idx) => {
        if (values.length <= minItems) return;
        setValues((prev) => prev.filter((_, currentIdx) => currentIdx !== idx));
    };

    useEffect(() => {
        onChange([...values]);
    }, [values]);

    let InputArea = (inputProps, removeButtonProps) => (
        <div className="flex items-center gap-2">
            <input type="text" className="border" {...inputProps} />
            <button
                className="rounded-full p-1 bg-slate-200 hover:text-red-600 disabled:pointer-events-none"
                {...removeButtonProps}
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                </svg>
            </button>
        </div>
    );

    if (CustomElement) {
        InputArea = CustomElement;
    }

    let AddButton = (
        <button
            onClick={() => handleAddItem()}
            className="text-sm px-4 py-2 rounded-sm bg-[dodgerBlue] hover:bg-blue-600 text-white disabled:bg-neutral-500 disabled:pointer-events-none"
            disabled={!!maxItems && values.length >= maxItems}
        >
            {addButtonLabel ?? "Add More"}
        </button>
    );

    if (customAddButton) {
        AddButton = React.cloneElement(customAddButton, {
            onClick: () => handleAddItem(),
            disabled: !!maxItems && values.length >= maxItems,
        });
    }

    return (
        <div className={`${className ?? ""}`} data-name="multiselect_wrapper">
            <div data-name="multiselect_inputs_wrapper" className="mb-4">
                {values.map((value, idx) => (
                    <div
                        key={idx}
                        data-name="multiselect_item"
                        className="w-fit h-fit"
                    >
                        {InputArea(
                            {
                                onChange: (e) =>
                                    handleUpdateRecord(idx, e.target.value),
                                defaultValue: value,
                            },
                            {
                                onClick: () => handleRemoveItem(idx),
                                disabled: values.length <= minItems,
                            }
                        )}
                    </div>
                ))}
            </div>

            {AddButton}
        </div>
    );
};

export default DynamicInput;
