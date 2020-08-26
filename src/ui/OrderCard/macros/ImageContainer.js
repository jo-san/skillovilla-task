import React from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import OrderIcon from './../assets/order-icon.png';
import { sm } from '../../breakpoints';

const IconContainer = styled.div`
    background-color: ${theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #EAEAEA;
    border-radius: 4px;

    width: 54px;
    height: 54px;
    img {
        max-width: 50px;
    }

    ${sm} {
        width: 60px;
        height: 60px;
        img {
            max-width: 54px;
        }
    }
`;

const ImageContainer = () => <IconContainer>
    <img src={OrderIcon} alt="order-icon" />
</IconContainer>

export default ImageContainer;
