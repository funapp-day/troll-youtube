import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SVG from 'react-inlinesvg';

import logo from '@/assets/images/logo.svg';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = (props) => {
  if (props.href) {
    return (
      <Link
        href={props.href}
      >
        <SVG
          width={97}
          height={20}
          src={logo.src}
          style={{
            fill: 'white',
          }}
        />
      </Link>
    );
  }

  return (
    <Image
      alt='Troll Youtube'
      title='Troll Youtube'
      src={logo}
    />
  );
};
