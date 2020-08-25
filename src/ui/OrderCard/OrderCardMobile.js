import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../theme';
import ImageContainer from './macros/ImageContainer';

import {ReactComponent as Next} from './assets/next.svg';
import StrikeThroughPrice from './macros/StrikeThroughPrice';
import OrderStatus from './macros/OrderStatus';

const CardWrapper = styled.div`
    background: ${theme.white};
    display: flex;
    min-height: 100px;
    flex-direction: column;
`;

const CardBody = styled.div`
    display: flex;
    border: 1px solid #E5E5E5;
    min-height: 60px;
    border-radius: 4px 4px 0 0;
    padding: 16px;

    flex-direction: column;
`;

const CardFooter = styled.div`
    display: flex;
    border: 1px solid #E5E5E5;
    border-top: 0px;
    min-height: 20px;
    border-radius: 0 0 4px 4px;
    align-items: center;
`;

const TitleGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 12px 0 0 0;
`;

const Title = styled.p`
    font-weight: ${theme.bold};
    color: ${theme.black};
    line-height: ${theme.lineHeight1_5};
    margin: 0;
    padding: 0 20px 0 8px;
    width: 100%;
    position: relative;

    svg {
        width: 12px;
        height: auto;

        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -6px;
    }
`;

const Price = styled.span`
    font-weight: ${theme.semiBold};
    color: ${theme.black};
    font-size: ${theme.base};
    margin: 0 0 0 8px;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const FooterEle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px;

    span {
        color: ${theme.grey};
        font-weight: ${theme.regular};
        line-height: ${theme.lineHeight1_5};
        font-size: ${theme.mini};
    }
    
    :not(:last-child) {
        border-right: 1px solid #E5E5E5;
    }
`;

const OrderCardMobile = ({
    title,
    subTextList,
    strikePrice,
    actualPrice,
    orderStatus
}) => {
    return <CardWrapper>
        <CardBody>
            <TitleGroup>
                <ImageContainer />
                <Title>{title} <Next /></Title>
            </TitleGroup>
            <Content>
                <FlexWrapper>
                    <StrikeThroughPrice price={strikePrice} />
                    <Price>{actualPrice}</Price>
                </FlexWrapper>
                <OrderStatus status={orderStatus} />
            </Content>
        </CardBody>
        <CardFooter>
            {subTextList.map((item, index) => {
                return <FooterEle key={`sub-text-ls-${index}`}>
                    <span>{item.label}:</span>
                    <span>{item.text}</span>
                </FooterEle>
            })}
        </CardFooter>
    </CardWrapper>
};

export default OrderCardMobile;

OrderCardMobile.propTypes = {
    /**
     * Card title
     */
    title: PropTypes.string.isRequired,
    /**
     * Card sub title
     */
    subTextList: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    /**
     * Cost before discount
     */
    strikePrice: PropTypes.string,
    /**
     * Purchase cost of the order
     */
    actualPrice: PropTypes.string.isRequired,
    /**
     * Current status of the order
     */
    orderStatus: PropTypes.string.isRequired,
};

OrderCardMobile.defaultProps = {
    title: 'Advance track from Sr. Programmer',
    subTextList: [
        {
            label: 'Order ID',
            text: '5995030209928',
        },
        {
            label: 'Ordered on',
            text: '28-08-2020',
        },
    ],
    strikePrice: 'Rs. 3,450',
    actualPrice: 'Rs. 2,450',
    orderStatus: 'FAILED'
};
