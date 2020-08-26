import React, {Fragment} from 'react';

import FormInput from '.';

export default {
  title: 'Example/FormInput',
  component: FormInput,
};

const Template = (args) => <FormInput {...args} />;

export const BasicText = Template.bind({});
BasicText.args = {
    label: 'Name',
    type: 'text',
    placeholder: 'Type your name here'
};

export const MobileInput = Template.bind({});
MobileInput.args = {
    label: 'Mobile number',
    type: 'text',
    placeholder: 'Type your mobilenumber',
    prefix: <Fragment>
        <span role="img" aria-label="flag">🇮🇳</span> +91
    </Fragment>,
};
