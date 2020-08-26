import React from 'react';

import { Header } from '.';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const PrimaryHeader = Template.bind({});
PrimaryHeader.args = {
  user: {},
};
