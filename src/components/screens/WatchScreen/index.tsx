import React from 'react';
import styled from 'styled-components';

import { AppHeader } from '@/components/app/AppHeader';

const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.common['--yt-spec-base-background']};
`;

export const WatchScreen: React.FC = () => {
  return (
    <Screen>
      <AppHeader
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
        }}
      />
    </Screen>
  );
};
