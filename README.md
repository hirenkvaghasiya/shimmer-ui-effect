# Shimmer/Layload UI Components for React JS 🚀

Customizable shimmer effects for React.

### [**Live Demo**](https://shafikulz.github.io/shimmer-ui-effect/)

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

```jsx
import React from "react";
import { ShimmerUIButton } from "shimmer-ui-effect";

class Example extends Component {
  render() {
    return <ShimmerButton  borderRadius={4} height={40} width={400} />;
  }
}
```

![buttons](https://user-images.githubusercontent.com/10860624/127743787-fec60445-4315-4626-a3e8-caa6d5a958f0.png)

#### Properties

| Property | Type   | Required | Default value | Description                                |
| :------- | :----- | :------- | :------------ | :----------------------------------------- |
| `borderRadius`   | number | no      | 4            | Border Radius of the button in px unit |
| `height`   | number | no      | 30            | Height of the button in px unit |
| `width`   | number | no      | 120            | Width of the button in px unit |

---