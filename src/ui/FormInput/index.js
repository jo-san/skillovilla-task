import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { theme } from '../theme';

const FormGroup = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 32px;
    position: relative;
`;

const FormLabel = styled.label`
    display: block;
    max-width: 100%;
    font-size: ${theme.mini};
    line-height: ${theme.lineHeight1_2};
    color: ${theme.black};
    margin-bottom: 8px;
    font-weight: 600;
    text-transform: uppercase;
`;

const Input = styled.input`
    background-color: ${theme.white};
    border: 1px solid #E5E5E5;
    background-image: none;
    
    outline: 0 none;
    height: auto;
    padding: 12px 24px;
    color: #2c2f42;
    box-shadow: none;
    border-radius: 4px;
    background-clip: padding-box;
    font-size: 15px;
    line-height: 1.2;

    transition: all 0.3s;

    :focus {
        outline: 0;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props => props.placeholderColor || 'rgba(0, 0, 0, 0.33)'};
    }
    :-ms-input-placeholder {
        color: ${props => props.placeholderColor || 'rgba(0, 0, 0, 0.33)'};
    }

    ${({hasPrefix}) => hasPrefix && css`
        padding-left: 80px;
    `}
`;

const PrefixWrapper = styled.span`
    position: absolute;
    left: 16px;
    bottom: 8px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;

    span {
        font-size: 20px;
    }
`;

const FormInput = ({ label, type, prefix, ...rest }) => {
    return <FormGroup>
        <FormLabel>{label}</FormLabel>
        <Input type={type} {...rest} hasPrefix={!!prefix} />
        {prefix ? <PrefixWrapper>{prefix}</PrefixWrapper> : null}
    </FormGroup>
};

export default FormInput;

FormInput.propTypes = {
    /**
     * Form element label
     */
    label: PropTypes.string.isRequired,
    /**
     * Form element label
     */
    type: PropTypes.string,
    /**
     * Form element label
     */
    prefix: PropTypes.element,
};

FormInput.defaultProps = {
    type: 'text'
}  
