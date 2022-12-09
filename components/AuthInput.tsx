import { Controller } from 'react-hook-form';
import { Text, TextInput, StyleSheet } from 'react-native';

type AuthInputType = {
  index: number;
  control: any;
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
    password: {
      value: new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      ),
      message:
        'Password should contain at least 1 lowercase, 1 uppercase, 1 numeric and 1 special characters',
    },
  };

  return (
    <Controller
      control={control}
      rules={{
        required: `${placeholder} is required.`,
        minLength: {
          value: name === 'password' ? 8 : 2,
          message:
            name === 'password'
              ? 'Password should be minimum 8 characters long. '
              : `${placeholder} is too small.`,
        },
        pattern:
          name === 'email'
            ? validationForm.email
            : name === 'password'
            ? validationForm.password
            : undefined,
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
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
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
    border: '1px solid white',
    backgroundColor: 'white',
  },
  textRequired: {
    paddingHorizontal: 20,
    marginTop: -6,
    fontSize: 12,
    color: '#808080',
  },
});

export default AuthInput;