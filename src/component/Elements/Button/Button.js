import React from 'react'
import styled from 'styled-components'

function ButtonStyled({ children, onClick, type, id, className }) {
    const StyledButton = styled.button`
    background-color: #433FD5;
    color: #FFF;
    border-radius: 10px;
    padding: 10px 25px;
    border: none;
    transition: .3s;
    &:hover {
        background-color: #0F0EA0;
      }
      
    &:focus{
        background-color: #0FEA0;
      }
  `;
    return (
        <StyledButton onClick={onClick} type={type} id={id} className={className} >
            {children}
        </StyledButton >
    )
}

export default ButtonStyled
