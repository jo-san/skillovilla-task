import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import OrderList from './OrderList';
import { theme } from '../ui/theme';
import ProfileForm from './ProfileForm';

import {ReactComponent as Phone} from '../ui/SideNav/assets/phone.svg';
import {ReactComponent as Close} from '../ui/OrderCard/assets/close.svg';

const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;

    padding-top: 8px;
`

const OrderListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        font-weight: ${theme.semiBold};
    }
`;

const ProfileCard = styled.div`
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid ${theme.greyLight};
    margin-bottom: 24px;
    
    div {
        display: flex;
        flex-direction: column;
    }

    span {
        color: ${theme.grey};
        font-size: ${theme.mini};
        line-height: ${theme.lineHeight1_5};
    }
`;

const LeftIcon = styled.span`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px;
    }
`;

const ProfileModalFromBottom = styled.div`
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: unset;
    z-index: 1033;
    min-height: 260px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    padding: 12px;
`;

const ModalBackdrop = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1032;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 12px 24px 0;
    justify-content: space-between;

    p {
        font-size: ${theme.largeMedium};
        margin: 0;
    }

    svg {
        width: 20px;
        height: auto;
    }
`

const DesktopMobile = () => {
    const [showProfile, setShowProfile] = useState(false);

    return <PageWrapper>
        <h2>Account Settings</h2>
        <ProfileCard onClick={() => setShowProfile(true)}>
            <LeftIcon>
                <Phone />
            </LeftIcon>
            <div>
                Profile Details
                <span>Personal Info, Change password</span>
            </div>
        </ProfileCard>

        <OrderListWrapper>
            <p>Order History</p>
            <OrderList />
        </OrderListWrapper>
        {showProfile ? <Fragment>
            <ModalBackdrop onClick={() => setShowProfile(false)} />
            <ProfileModalFromBottom>
                <ModalHeader>
                    <p>Profile Details</p>
                    <Close onClick={() => setShowProfile(false)} />
                </ModalHeader>
                <ProfileForm />
            </ProfileModalFromBottom>
        </Fragment> : null}
    </PageWrapper>
}

export default DesktopMobile;
