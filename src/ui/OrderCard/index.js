import React from 'react';
import PropTypes from 'prop-types';

import OrderCardMobile from './OrderCardMobile';
import OrderCardDesktop from './OrderCardDesktop';
import isMobile from '../../utils/isMobile';

const _MOBILE = isMobile();

const OrderCard = props => {
    if(!_MOBILE) {
        return <OrderCardDesktop {...props} />
    }

    return <OrderCardMobile {...props} />
};

export default OrderCard;

OrderCard.propTypes = {
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
    orderStatus: PropTypes.oneOf(['SUCCESS', 'PENDING', 'FAILED']).isRequired,
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

OrderCard.defaultProps = {
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
