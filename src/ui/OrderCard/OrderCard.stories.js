import React  from 'react';

import OrderCard from '.';

export default {
  title: 'Example/OrderCard',
  component: OrderCard,
};

const Template = (args) => <OrderCard {...args} />;

export const BasicText = Template.bind({});
BasicText.args = {
    label: 'Name',
    type: 'text',
    placeholder: 'Type your name here'
};
