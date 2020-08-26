import PropTypes from "prop-types";
import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from "../../theme";
import capitalize from "../../../utils/capitalize";

// ICONS
import {ReactComponent as Close} from '../assets/close.svg';
import {ReactComponent as Alert} from '../assets/alert.svg';
import {ReactComponent as Tick} from '../assets/tick.svg';

const StatusStyle = styled.span`
    display: flex;
    align-items: center;

    position: relative;
    font-size: ${theme.mini};
    text-transform: capitalize;
    font-weight: ${theme.semiBold};

    svg {
        width: ${theme.mini}; 
        height: auto;
        margin-right: 8px;
    }

    ${({status}) => status === 'SUCCESS' && css`
        color: ${theme.success};

        svg {
            fill: ${theme.success};
        }
    `}

    ${({status}) => status === 'PENDING' && css`
        color: ${theme.warning};

        svg {
            fill: ${theme.warning};
        }
    `}

    ${({status}) => status === 'FAILED' && css`
        color: ${theme.danger};

        svg {
            fill: ${theme.danger};
        }
    `}
`;

const OrderStatus = ({ status }) => (
    <StatusStyle status={status}>
        {status === 'FAILED'? <Close /> : status === 'PENDING' ? <Alert /> : <Tick />}
        {capitalize(status)}
    </StatusStyle>
);

OrderStatus.propTypes = {
    status: PropTypes.string
}

OrderStatus.defaultProps = {
    status: 'FAILED'
}

export default OrderStatus;
