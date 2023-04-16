import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerUIButton, ShimmerUITitle, ShimmerUIText, ShimmerUIBadge } from './src';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <ShimmerUIBadge width={200} height={30} />
            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);