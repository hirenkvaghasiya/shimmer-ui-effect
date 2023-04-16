import React from 'react'
import ReactDOM from 'react-dom'
import { ShimmerUIButton } from './src';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <ShimmerUIButton />
                <ShimmerUIButton borderRadius={100} width={200} height={40} />
                <ShimmerUIButton borderRadius={10} width={300} height={50} />
            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);