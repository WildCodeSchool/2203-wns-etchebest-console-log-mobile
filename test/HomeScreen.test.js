import { render, screen } from '@testing-library/react-native';
import HomeScreen from "../screens/HomeScreen";

test('render text Login in home page', () => {
    render(<HomeScreen navigation={'Login'} />)
    const text = screen.getByText('Login')
    expect(text).toBeInTheDocument();
})