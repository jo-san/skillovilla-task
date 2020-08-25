import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { sm } from '../breakpoints';

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 200ms ease-in-out;

  width: ${props => props.buttonWidth || '180px'};
  padding: 8px 16px;
  height: 48px;
  
  font-weight: ${theme.semiBold};
  font-size: ${theme.mini};
  line-height: ${theme.lineHeight1_2};
  
  display: flex;
  align-items: center;
  justify-content: center;

  ${sm} {
    font-size: ${theme.base};

    svg {
      width: ${theme.base};
      height: auto;
      margin-right: 12px;
    }
  }
  
  ${({size}) => size === 'small' && css`
    height: 40px;
    padding: 4px 12px;

    ${sm} {
      font-size: ${theme.mini};
    }
  `}

  ${({buttonType}) => buttonType === 'primary' && css`
    background-color: ${theme.brandPrimary};
    color: ${theme.white};

    :hover {
      background-color: ${theme.brandPrimaryDark};
    }
  `}

  ${({buttonType}) => buttonType === 'link' && css`
    background-color: transparent;
    color: ${theme.brandPrimary};
    font-weight: ${theme.bold};

    :hover {
      color: ${theme.brandPrimaryDark};
    }
  `}
  
  ${({buttonType}) => buttonType === 'secondary' && css`
    background-color: ${theme.buttonSecondary};
    color: ${theme.brandPrimary};
    border: 1px solid ${theme.brandPrimary};

    svg {
      fill: ${theme.brandPrimary};
    }

    :hover {
      background-color: ${theme.buttonSecondaryDark};
    }
  `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, type, size, buttonWidth, icon, iconAlign, ...props }) => {
  return (
    <ButtonWrapper
      type="button"
      buttonType={type}
      buttonWidth={buttonWidth}
      size={size}
      {...props}
    >
      {icon && iconAlign === 'left' ? icon :null}
      {label}
      {icon && iconAlign === 'right' ? icon :null}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  /**
   * Button Type
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'link']),
  /**
   * Button Size
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   * Button width
   */
  buttonWidth: PropTypes.string,
  /**
   * Button Icon
   */
  icon: PropTypes.element,
  /**
   * Button Icon placement
   */
  iconAlign: PropTypes.oneOf(['left', 'right']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  type: 'primary',
  size: 'medium',
  iconAlign: 'left',
  onClick: undefined,
};
