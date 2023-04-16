import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ShimmerUIText = ({ line, gap, className }) => {

    const renderLines = () => {
        const title_lines = [];

        for (let index = 0; index < line; index++) {
            title_lines.push(
                <div className="shimmer__ui shimmer__ui__text__line" key={index} />
            );
        }

        return title_lines;
    };

    return (
        <div
            className={classNames({
                "grid__ui shimmer__ui__text": true,
                [`grid__ui__gap__${gap}`]: gap,
                [className]: className,
            })}
        >
            {renderLines()}
        </div>
    )
}

ShimmerUIText.propTypes = {
    line: PropTypes.number,
    gap: PropTypes.oneOf([10, 15, 20, 30]),
    className: PropTypes.string,
};

ShimmerUIText.defaultProps = {
    line: 5,
    gap: 15,
};

export default ShimmerUIText