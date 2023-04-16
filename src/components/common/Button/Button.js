import React from 'react'

const ShimmerUIButton = ({ borderRadius, height, width }) => {
    return (
        <div
            className="shimmer__ui shimmer__ui__button"
            style={{
                borderRadius: borderRadius + "px",
                width: width + "px",
                height: height + "px",
            }}
        />
    )
}

ShimmerUIButton.defaultProps = {
    borderRadius: 4,
    height: 30,
    width: 120,
};

export default ShimmerUIButton