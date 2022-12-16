import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';

describe('LoginScreen', () => {
  test('render HomeScreen', () => {
    render(<HomeScreen navigation={{} as NavigationProp<ParamListBase>} />);
  });
  test('test button TouchableOpacity', () => {
    expect(<TouchableOpacity />);
  });
  test('test id my-button', () => {
    render(<HomeScreen />);
    expect(fireEvent.press(screen.getByTestId('my-button')));
  });
});
