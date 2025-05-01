# useDynamicInput (React Hook + Component)

A customizable React hook for rendering and managing dynamic input fields with add/remove functionality.

## ✨ Features

-   Easy to use with built-in input and buttons
-   Customizable with custom inputs and buttons
-   Controlled input state for form management
-   Add/Remove items with constraints

## 📦 Installation

Copy `index.jsx`, `index.d.ts`, and the code into your project.

## 🚀 Usage

```tsx
import useDynamicInput from "./useDynamicInput";

const MyComponent = () => {
    const { DynamicInput, values, handleAddItem, handleRemoveItem } =
        useDynamicInput({
            defaultCount: 2,
            minItems: 1,
            maxItems: 5,
        });

    return (
        <div>
            <DynamicInput />
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
    );
};
```

## 🛠 Props

**useDynamicInput({ defaultCount, minItems, maxItems })**

| Prop         | Type     | Default | Description            |
| ------------ | -------- | ------- | ---------------------- |
| defaultCount | `number` | 1       | Initial input count    |
| minItems     | `number` | 0       | Minimum allowed inputs |
| maxItems     | `number` | null    | Maximum allowed inputs |

**DynamicInput props**

| Prop                 | Type                         | Description                       |
| -------------------- | ---------------------------- | --------------------------------- |
| `className`          | `string`                     | CSS classes                       |
| `addButtonLabel`     | `React.ReactNode \| null`    | Text or element inside add button |
| `customAddButton`    | `React.ReactElement \| null` | Fully custom add button           |
| `customInput`        | `React.ReactElement \| null` | Custom input element              |
| `customRemoveButton` | `React.ReactElement \| null` | Custom remove button              |

## 🧾 What `useDynamicInput` returns

| Return Value       | Type                    | Description                                         |
| ------------------ | ----------------------- | --------------------------------------------------- |
| `DynamicInput`     | Component               | Renders the dynamic input list                      |
| `values`           | `any[]`                 | Array of input values                               |
| `handleAddItem`    | `() => void`            | Function to manually add a new input                |
| `handleRemoveItem` | `(idx: number) => void` | Function to manually remove an input at given index |

You can use `values` for form submission or conditional rendering, and call `handleAddItem` / `handleRemoveItem` from other parts of your UI if needed.

## 🛠 Example Custom Add Button

```tsx
<DynamicInput
    customAddButton={<button className="my-custom-button">➕ Add Field</button>}
/>
```
