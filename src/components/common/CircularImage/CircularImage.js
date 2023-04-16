import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ShimmerUICircularImage = ({ size, center, className }) => {
    return (
        <div
            className={classNames({
                "text__ui__center": center,
            })}
        >
            <div
                style={{
                    width: size + "px",
                    height: size + "px",
                }}
                className={classNames({
                    "shimmer__ui shimmer__ui__circle": true,
                    [className]: className,
                })}
            ></div>
        </div>
    );
};

ShimmerUICircularImage.propTypes = {
    size: PropTypes.number,
    center: PropTypes.bool,
    className: PropTypes.string,
};

ShimmerUICircularImage.defaultProps = {
    center: false,
    size: 80,
};

export default ShimmerUICircularImage;
