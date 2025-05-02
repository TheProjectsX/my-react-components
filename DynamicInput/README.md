# DynamicInput Component

The `DynamicInput` component allows you to create a dynamic list of input fields where users can add or remove input items. It is highly customizable with support for a custom layout, input validation, and dynamic item addition/removal.

## Properties

| Property            | Type                                                                                                                                                                                                                                  | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onChange`          | `(values: string[]) => void`                                                                                                                                                                                                          | A callback function that is triggered when the values in the input fields change. It receives an array of updated values as a parameter.                                        |
| `children`          | `(inputProps: { handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void; defaultValue: string }, removeButtonProps: { handleOnClick: (e: React.MouseEvent<HTMLElement>) => void; disabled: boolean }) => React.ReactElement` | A custom render function that allows you to pass custom input fields and remove buttons. The function receives `inputProps` and `removeButtonProps` for customization.          |
| `defaultValues`     | `string[]`                                                                                                                                                                                                                            | Give Default Values of the Input(s). If given value count is smaller than defaultItemsCount, no default Value will be given. Useful when component rendering based on condition |
| `defaultItemsCount` | `number`                                                                                                                                                                                                                              | The number of input fields to be initially displayed. Default is 2.                                                                                                             |
| `minItems`          | `number`                                                                                                                                                                                                                              | The minimum number of input fields that should be allowed. Default is 0.                                                                                                        |
| `maxItems`          | `number` \| `null`                                                                                                                                                                                                                    | The maximum number of input fields allowed. If set to `null`, there's no upper limit.                                                                                           |
| `className`         | `string`                                                                                                                                                                                                                              | A custom CSS class name that will be applied to the root element of the component.                                                                                              |
| `addButtonLabel`    | `React.ReactNode` \| `null`                                                                                                                                                                                                           | The label for the "Add More" button. Default is `"Add More"`.                                                                                                                   |
| `customAddButton`   | `React.ReactElement<any, any>` \| `null`                                                                                                                                                                                              | A custom React element to render as the "Add More" button. If provided, this will replace the default button.                                                                   |

## Example

```jsx
import React, { useState } from "react";
import DynamicInput from "./DynamicInput";

const App = () => {
    const [inputValues, setInputValues] = useState([]);

    const handleValuesChange = (values) => {
        setInputValues(values);
    };

    return (
        <div>
            <h1>Dynamic Input Example</h1>

            <DynamicInput
                onChange={handleValuesChange}
                defaultItems={3}
                minItems={1}
                maxItems={5}
                addButtonLabel="Add More Fields"
                className="my-custom-class"
            />

            <div>
                <h2>Current Input Values:</h2>
                <pre>{JSON.stringify(inputValues, null, 2)}</pre>
            </div>
        </div>
    );
};

export default App;
```

### Key Notes:

-   `onChange`: This will update the parent component with the current values whenever any input field is updated.
-   `defaultItems`: You can specify how many input fields should be present when the component is first rendered.
-   `minItems` & `maxItems`: These properties ensure that the number of inputs stays within the allowed limits.
-   `customAddButton`: If you want to replace the default "Add More" button, pass in your custom button as a React element.

## Custom Rendering

You can also pass a custom render function as the `children` prop, which allows you to have full control over how each input and remove button are rendered.

Example of using `children`:

```jsx
import React, { useState } from "react";
import DynamicInput from "./DynamicInput";

const App = () => {
    const [inputValues, setInputValues] = useState([]);

    const handleValuesChange = (values) => {
        setInputValues(values);
    };

    return (
        <div>
            <h1>Dynamic Input Example</h1>

            <DynamicInput
                onChange={handleValuesChange}
                defaultItems={2}
                minItems={1}
                maxItems={5}
            >
                {(inputProps, removeButtonProps) => (
                    <div className="custom-input-wrapper">
                        <input {...inputProps} className="custom-input" />
                        <button
                            {...removeButtonProps}
                            className="custom-remove-button"
                        >
                            Remove
                        </button>
                    </div>
                )}
            </DynamicInput>
        </div>
    );
};

export default App;
```

In this example, the `children` function receives `inputProps` (for the input element) and `removeButtonProps` (for the remove button), allowing you to customize their appearance and behavior.
