import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 42px;
  width: 100%;
  background-color: ${props => props.color1};
  color: white;
`;

export default Header;
