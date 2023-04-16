# Shimmer/Layload UI Components for React JS 🚀

Customizable shimmer effects for React.

### [**Live Demo**](https://hirenkvaghasiya.github.io/shimmer-ui-effect/)

## Install

```bash
npm install shimmer-ui-effect --save
```

or

```bash
yarn add shimmer-ui-effect
```

## Elements

### Shimmer UI Button

<kbd>
<img src="./extra-files/ShimmerUIButton.png" />
</kbd>
<br />

```jsx
import React from "react";
import { ShimmerUIButton } from "shimmer-ui-effect";

const App = () => {
  return (
    return <ShimmerUIButton  borderRadius={4} height={40} width={400} />;
  )
}
```

#### Properties

| Property | Type   | Required | Default value | Description                                |
| :------- | :----- | :------- | :------------ | :----------------------------------------- |
| `borderRadius`   | number | no      | 4            | Border Radius of the button in px unit |
| `height`   | number | no      | 30            | Height of the button in px unit |
| `width`   | number | no      | 120            | Width of the button in px unit |

---

### Shimmer UI Title

<kbd>
<img src="./extra-files/ShimmerUITitle.png" />
</kbd>
<br />

```jsx
import React from "react";
import { ShimmerUITitle } from "shimmer-ui-effect";

const App = () => {
  render() {
    return <ShimmerUITitle line={3} gap={10} variant="primary" />;
  }
}
```

#### Properties

| Property    | Type   | Required | Default value | Description                                                   |
| :---------- | :----- | :------- | :------------ | :------------------------------------------------------------ |
| `line`      | number | yes      | 3             | Number of line                                                |
| `gap`       | number | yes      | 10            | Gap between of lines. Four options available [10, 15, 20, 30] |
| `variant`   | string | yes      | primary       | Tow options available ["primary", "secondary"]                |
| `className` | string | no       |               | Additonal style classes                                       |

---
