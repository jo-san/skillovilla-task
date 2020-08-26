import React from 'react';
import OrderCard from '../ui/OrderCard';

const pageData = [
    {
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
    },
    {
        title: 'Advance track from Sr. Programmer',
        subTextList: [
            {
                label: 'Order ID',
                text: '5995030209928',
            },
            {
                label: 'Purchased on',
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
        ],
        orderStatus: 'PENDING'
    },
    {
        title: 'Advance track from Sr. Programmer',
        subTextList: [
            {
                label: 'Order ID',
                text: '5995030209928',
            },
            {
                label: 'Purchased on',
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
        ],
        orderStatus: 'SUCCESS'
    }
];

const OrderList = () => {
    return pageData.map((item, index) => {
        return <OrderCard key={`order-li-${index}`} {...item} />
    })
}

export default OrderList;