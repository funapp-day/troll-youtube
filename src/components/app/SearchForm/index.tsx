import React from 'react';
import styled from 'styled-components';

import { SEarchFormProps } from './types';

const Container = styled.form`
  display: flex;
  align-items: center;
  width: 640px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.searchBox['--ytd-searchbox-border-color']};
  background-color: ${(props) => props.theme.searchBox['--ytd-searchbox-background']};
  overflow: hidden;
`;

const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px 0 0 40px;
  outline: none;
  padding: 0 16px;
  background-color: transparent;
  color: ${(props) => props.theme.searchBox['--ytd-searchbox-text-color']};
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 100%;
  border-radius: 0 40px 40px 0;
  border: 1px solid ${(props) => props.theme.searchBox['--ytd-searchbox-legacy-button-border-color']};
  background-color: ${(props) => props.theme.searchBox['--ytd-searchbox-legacy-button-color']};
`;

export const SearchForm: React.FC<SEarchFormProps> = (props) => {
  return (
    <Container
      { ...props.form }
    >
      <Input
        { ...props.input }
      />
      <SearchButton />
    </Container>
  );
};
