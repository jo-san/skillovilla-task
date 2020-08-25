import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../theme';
import {ReactComponent as Menu} from './assets/menu.svg';
import {ReactComponent as Phone} from './assets/phone.svg';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const NavItem = styled.li`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 14px 0;
    font-size: ${theme.base};
    font-weight: 500;

    background: 0 0;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    
    svg {
        width: ${theme.base};
        margin-right: 20px;
    }

    :hover {
        color: ${theme.brandPrimary};
        
        svg {
            fill: ${theme.brandPrimary};
        }
    }

    ${({active}) => active && css`
        color: ${theme.brandPrimary};

        svg {
            fill: ${theme.brandPrimary};
        }

        :after {
            content: ' ';
            height: 100%;
            width: 1px;
            position: absolute;
            left: auto;
            right: 0;

            background-color: ${theme.brandPrimary};
        }
    `}
`;

const SideNav = () => {
    const [active, setActive] = React.useState(0);

    const menuItems = ['Profile Details', 'Order History'];
    const menuIcons = [<Menu key={0} />, <Phone key={1} />];

    return <Wrapper>
        <h2>Account Settings</h2>
        {menuItems.map((item, index) => <NavItem 
            active={active === index}
            onClick={() => setActive(index)}
            key={`nav-item-${index}`}>
                {menuIcons[index]} {item}
        </NavItem>)}
    </Wrapper>
};

export default SideNav;
