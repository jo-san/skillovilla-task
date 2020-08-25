import React from 'react';

import SideNav from '.';

export default {
  title: 'Example/Sidebar',
  component: SideNav,
};

const Template = (args) => <SideNav {...args} />;

export const NavExample = Template.bind({});
