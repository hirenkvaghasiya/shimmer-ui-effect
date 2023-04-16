import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ShimmerUIThumbnail = ({
    height,
    width,
    center,
    className,
    fitOnFrame,
    rounded,
}) => {
    return (
        <div
            className={classNames({
                "h-100": fitOnFrame,
                "text__ui__center ": center,
            })}
        >
            <div
                className={classNames({
                    "h__ui__100": fitOnFrame,
                    "shimmer__ui shimmer__ui__thumbnail": true,
                    "border__ui__rounded": rounded,
                    [className]: className,
                })}
                style={{
                    height: height + "px",
                    width: width + "%",
                }}
            ></div>
        </div>
    );
};

ShimmerUIThumbnail.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    center: PropTypes.bool,
    className: PropTypes.string,
    fitOnFrame: PropTypes.bool,
    rounded: PropTypes.bool,
};

ShimmerUIThumbnail.defaultProps = {
    canter: false,
    fitOnFrame: false,
    rounded: false,
    height: 200,
};

export default ShimmerUIThumbnail;
