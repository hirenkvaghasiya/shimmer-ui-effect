import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerUIButton, ShimmerUITitle, ShimmerUIText, ShimmerUIBadge, ShimmerUICircularImage, ShimmerUIThumbnail } from './src';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <ShimmerUIThumbnail rounded width={40} />
            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);