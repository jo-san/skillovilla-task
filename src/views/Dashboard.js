import React from 'react';

import DashboardMobile from './DashboardMobile';
import DashboardDesktop from './DashboardDesktop';

import isMobile from '../utils/isMobile';

const _MOBILE = isMobile();

const Dashboard = () => {
    if(!_MOBILE) {
        return <DashboardDesktop />
    }

    return <DashboardMobile />
};

export default Dashboard;