import React, { useState } from 'react';
import styled from 'styled-components';

import SideNav from '../ui/SideNav';
import OrderList from './OrderList';
import { theme } from '../ui/theme';
import ProfileForm from './ProfileForm';

const PageWrapper = styled.section`
    display: flex;
    padding-top: 60px;

    min-height: calc(100vh - 130px);
`

const SidePan = styled.section`
    width: 340px;
`

const RightPan = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid ${theme.greyLighter};
    padding-left: 80px;
`

const DesktopDesktop = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    return <PageWrapper>
        <SidePan>
            <SideNav setActiveTab={setActiveTab} />
        </SidePan>
        <RightPan>
            {activeTab === 0 ? <ProfileForm /> : null}
            {activeTab === 1 ?<OrderList /> : null}
        </RightPan>
    </PageWrapper>
}

export default DesktopDesktop;
