import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../styles/colors';

type AuthInputType = {
  index: number;
  control: Control;
  placeholder: string;
  name: string;
};

const AuthInput = (props: AuthInputType) => {
  const { index, control, placeholder, name } = props;

  const validationForm = {
    email: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email adress is incorrect',
    },
    // '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    password: {
      value: /^(?=.{1,})/,
      message: 'Password should contain at least 1 character', // 'Password should contain at least 1 lowercase, 1 uppercase, 1 numeric and 1 special characters',
    },
  };

  return (
    <Controller
      control={control}
      rules={{
        required: `${placeholder} is required.`,
        minLength: {
          value: 1,
          message: `${placeholder} can't be empty.`,
        },
        pattern:
          name === 'email'
            ? validationForm.email
            : validationForm.password || undefined,
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            testID="my-input"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            autoFocus={index === 0}
            secureTextEntry={name === 'password'}
          />
          {error && (
            <Text style={styles.textRequired}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    border: '1px solid white',
    height: 40,
    margin: 12,
    padding: 10,
  },
  textRequired: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: -6,
    paddingHorizontal: 20,
  },
});

export default AuthInput;
