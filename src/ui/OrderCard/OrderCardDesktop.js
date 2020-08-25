import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../theme';
import ImageContainer from './macros/ImageContainer';
import StrikeThroughPrice from './macros/StrikeThroughPrice';
import { Button } from '../Button';
import OrderStatus from './macros/OrderStatus';

const CardWrapper = styled.div`
    background: ${theme.white};
    display: flex;
    min-height: 100px;
    flex-direction: column;

    :hover {
        background-color: ${theme.greyLighter};    
    }
`;

const CardBody = styled.div`
    display: flex;
    border: 1px solid #E5E5E5;
    min-height: 60px;
    border-radius: 4px 4px 0 0;
    padding: 20px;
`;

const CardFooter = styled.div`
    display: flex;
    border: 1px solid #E5E5E5;
    border-top: 0px;
    min-height: 20px;
    border-radius: 0 0 4px 4px;
    padding: 8px 20px 8px 8px;

    align-items: center;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    padding: 12px 0 12px 12px;
`;

const Title = styled.p`
    font-weight: ${theme.bold};
    color: ${theme.black};
    margin: 0 0 8px 0;
`;

const Price = styled.p`
    font-weight: ${theme.semiBold};
    color: ${theme.black};
    font-size: ${theme.largeSmall};
    margin: 0;
`;

const SubText = styled.div`
    font-weight: ${theme.light};
    color: ${theme.gray};

    span {
        :not(:last-child) {
            :after {
                content: '.';
                display: inline-block;
                line-height: 0.5;
                vertical-align: top;
                margin: 0px 12px;
            }
        }
    }
`;

const FooterLinks = styled.div`
    display: flex;
    align-items: center;
`;

const OrderCardDesktop = ({
    title,
    subTextList,
    strikePrice,
    actualPrice,
    footerLinks,
    orderStatus
}) => {
    return <CardWrapper>
        <CardBody>
            <ImageContainer />
            <Content>
                <div>
                    <Title>{title}</Title>
                    <SubText>
                        {subTextList.map((item, index) => {
                            return <span key={`sub-text-ls-${index}`}>{item.label}: {item.text}</span>
                        })}
                    </SubText>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <StrikeThroughPrice price={strikePrice} />
                    <Price>{actualPrice}</Price>
                </div>
            </Content>
        </CardBody>
        <CardFooter>
            <FooterLinks>
                {footerLinks.map((item, index) => {
                    return <Button 
                                buttonWidth='auto' 
                                type='link' 
                                size='small' 
                                key={`foo-link-${index}`} 
                                onClick={item.onClick} 
                                label={item.label} />
                })}
            </FooterLinks>
            <OrderStatus status={orderStatus} />
        </CardFooter>
    </CardWrapper>
};

export default OrderCardDesktop;

OrderCardDesktop.propTypes = {
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
    /**
     * Current status of the order
     */
    footerLinks: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        })
    ),
};

OrderCardDesktop.defaultProps = {
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
    footerLinks: [
        {
            label: 'View order details',
            onClick: () => false,
        },
        {
            label: 'Help',
            onClick: () => false,
        },
        {
            label: 'Reorder',
            onClick: () => false,
        },
    ],
    orderStatus: 'FAILED'
};
