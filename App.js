import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerUIButton, ShimmerUITitle } from './src';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <ShimmerUITitle line={3} gap={10} variant="primary" />
                <ShimmerUITitle line={5} gap={10} variant="secondary" />
            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);