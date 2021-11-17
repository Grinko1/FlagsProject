import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title>Where is the world?</Title>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === 'light' ? <IoMoon size="14px" /> : <IoMoonOutline size="14px" />}

              <span style={{ marginLeft: '0.74rem' }}>{theme} theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
    </div>
  );
};

export default Header;
