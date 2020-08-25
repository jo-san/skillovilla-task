import React from 'react';
import styled from 'styled-components';

import logo from './assets/skillovilla-logo.png';
import {ReactComponent as Menu} from './assets/menu.svg';
import {ReactComponent as Phone} from './assets/phone.svg';

import { Button } from '../Button';
import NavItems from './NavItems';
import UserInitial from './UserInitial';

import { sm } from '../breakpoints';

import isMobile from '../../utils/isMobile';

const HeaderWrapper = styled.header`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;

  ${sm} {
    width: 140px;
  }
`;

const _MOBILE = isMobile();

export const Header = () => (
    _MOBILE ?
      <HeaderWrapper>
        <FlexWrapper>
          <Menu style={{'width': '24px', 'height': '20px', 'marginRight': '12px'}} />
          <Logo src={logo} alt="logo" />
        </FlexWrapper>
        <FlexWrapper>
          <Button size="small" label="Login/Signup" type='primary' buttonWidth={'auto'} />
        </FlexWrapper>
      </HeaderWrapper>
    :
      <HeaderWrapper>
        <FlexWrapper>
          <Logo src={logo} alt="logo" />
          <NavItems />
        </FlexWrapper>
        <FlexWrapper>
          <Button size="small" label="Request a call back" type='secondary' icon={<Phone />} buttonWidth={'auto'} />
          <UserInitial initial={'JB'} /> 
        </FlexWrapper>
      </HeaderWrapper>
);
