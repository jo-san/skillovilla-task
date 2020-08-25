import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../theme';

const Wrapper = styled.div`
    font-weight: 700;
    display: inline-block;
    background-color: ${theme.brandPrimary};
    color: ${theme.white};
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 100%;
    background-clip: padding-box;
    font-size: ${theme.mini};

    margin-left: 32px;
`;

const UserInitial = ({ initial }) => {
    return <Wrapper>{initial}</Wrapper>
};

export default UserInitial;

UserInitial.propTypes = {
    /**
     * UserInitial content
     */
    initial: PropTypes.string.isRequired
};
