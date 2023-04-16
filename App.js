import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerButton } from './src';

const App = () => {
    return (
        <React.Fragment>
            <ShimmerButton />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);