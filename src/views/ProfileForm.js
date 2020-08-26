import React, { Fragment } from 'react';
import styled from 'styled-components';

import { theme } from '../ui/theme';
import FormInput from '../ui/FormInput';
import { sm, xs } from '../ui/breakpoints';
import { Button } from '../ui/Button';
import isMobile from '../utils/isMobile';

const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 12px;
    
    ${sm} {
        margin-top: 52px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;

    ${sm} {
        flex-direction: row;

        margin-left: -12px;
        margin-right: -12px;
    }
`

const Col = styled.div`
    width: 100%;
    
    ${sm} {
        width: 50%;

        padding-left: 12px;
        padding-right: 12px;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;

    ${xs} {
        flex-direction: column-reverse;
    }
`;

const _MOBILE = isMobile();

const ProfileForm = () => {
    return <PageWrapper>
        <Row>
            <Col>
                <FormInput 
                    label='first name'
                    placeholder='Eg. Jothisankar'
                    type='text' />
            </Col>    

            <Col>
                <FormInput 
                    label='last name'
                    placeholder='Eg. kanagavel'
                    type='text' />
            </Col>
        </Row>

        <Row>
            <Col>
                <FormInput 
                    label='email address'
                    placeholder='Eg. nk.jothisankar@gmail.com'
                    type='text' />
            </Col>

            <Col>
                <FormInput 
                    label='mobile number'
                    placeholder='Eg. 97890 20751'
                    prefix={<Fragment>
                        <span role="img" aria-label="flag">🇮🇳</span> +91
                    </Fragment>}
                    type='text' />
            </Col>
        </Row>
        
        <ButtonsWrapper>
            <Button label={"Save"} type="primary" buttonWidth={_MOBILE ? 'auto' : '200px'} />
            <Button label={"Update password"} type="link" style={{ justifyContent: 'flex-start' }} buttonWidth={'auto'} />
        </ButtonsWrapper>
    </PageWrapper>
}

export default ProfileForm;
