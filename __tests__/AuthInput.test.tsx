import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AuthInput from '../components/AuthInput';
import { TextInput } from 'react-native';

describe('AuthInput', () => {
  it('render component authInput', () => {
    render(<TextInput />);
  });
});
