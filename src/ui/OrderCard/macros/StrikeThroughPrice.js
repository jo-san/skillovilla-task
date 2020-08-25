import PropTypes from "prop-types";
import React from 'react';
import styled from 'styled-components';
import { theme } from "../../theme";

const StrikeThroughStyle = styled.span`
    display: inline-block;
    position: relative;
    color: ${theme.grey};
    font-size: ${theme.mini};
    
    &:before {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        height: 1px;
        background-color: ${theme.grey};
    }
`;

const StrikeThroughPrice = ({ price }) => (
    <StrikeThroughStyle>{price}</StrikeThroughStyle>
);

StrikeThroughPrice.propTypes = {
    price: PropTypes.string
}

StrikeThroughPrice.defaultProps = {
    price: '2,340'
}

export default StrikeThroughPrice;
