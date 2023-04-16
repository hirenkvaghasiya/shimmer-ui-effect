import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ShimmerUITitle = ({ line, gap, variant, className }) => {

    const renderLines = () => {
        const title_lines = [];

        for (let index = 0; index < line; index++) {
            title_lines.push(
                <div className="shimmer__ui shimmer__ui__title__line" key={index} />
            );
        }

        return title_lines;
    };

    return (
        <div
            className={classNames({
                grid__ui: true,
                "shimmer__ui__title": variant === "primary",
                "shimmer__ui__title__secondary": variant === "secondary",
                [`grid__ui__gap__${gap}`]: gap,
                [className]: className,
            })}
        >
            {renderLines()}
        </div>
    )
}

ShimmerUITitle.propTypes = {
    line: PropTypes.number,
    gap: PropTypes.oneOf([10, 15, 20, 30]),
    variant: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
};

ShimmerUITitle.defaultProps = {
    line: 3,
    gap: 10,
    variant: "primary",
};

export default ShimmerUITitle