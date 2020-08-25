import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../theme';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 40px;
`;

const NavItem = styled.li`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 0 32px 0 0;
    padding: 14px 0;
    font-size: ${theme.base};
    font-weight: 500;

    background: 0 0;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    :hover {
        color: ${theme.brandPrimary};
    }
        
    ${({active}) => active && css`
        color: ${theme.brandPrimary};

        :after {
            content: ' ';
            height: 4px;
            width: 18px;
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-left: -9px;
            border-radius: 6px;

            background-color: ${theme.brandPrimary};
        }
    `}
`;

const NavItems = () => {
    const [active, setActive] = React.useState(0);

    const menuItems = ['Home', 'Tracks', 'Courses', 'About'];

    return <Wrapper>
        {menuItems.map((item, index) => <NavItem 
            active={active === index}
            onClick={() => setActive(index)}
            key={`nav-item-${index}`}>{item}
        </NavItem>)}
    </Wrapper>
};

export default NavItems;

