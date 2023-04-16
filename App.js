import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerUIButton, ShimmerUITitle, ShimmerUIText } from './src';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <ShimmerUIText line={5} gap={15} />
            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);