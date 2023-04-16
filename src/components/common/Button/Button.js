import React from 'react'

const ShimmerUIButton = ({ borderRadius, height, width }) => {
    return (
        <div
            className="shimmer__ui shimmer__ui__button"
            style={{
                borderRadius: borderRadius,
                width: width,
                height: height,
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