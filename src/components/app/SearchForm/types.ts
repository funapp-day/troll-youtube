import { HTMLAttributes } from 'react';

export interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {}

export interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {}

export interface SEarchFormProps {
  form?: SearchFormProps;
  input?: SearchInputProps;
};
