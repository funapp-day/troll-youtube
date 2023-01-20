import React from 'react';
import styled from 'styled-components';

import { Logo } from '../Logo';
import { SearchForm } from '../SearchForm';
import { AppHeaderProps } from './types';

const Header = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: ${props => props.theme.common['--yt-spec-base-background']};
  ${props => ({ ...props.style })};
`;

const Content = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
  return (
    <Header
      { ...props }
    >
      <Logo
        href='/'
      />
      <Content>
        <SearchForm
          input={{
            placeholder: '검색',
          }}
        />
      </Content>
    </Header>
  );
};
