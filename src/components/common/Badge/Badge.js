import React from 'react'
import PropTypes from 'prop-types'

const ShimmerUIBadge = ({ width, height }) => {
    return <div className="shimmer__ui shimmer__ui__badge" style={{ width: width + "px", height: height + "px" }} />;
}

ShimmerUIBadge.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default ShimmerUIBadge