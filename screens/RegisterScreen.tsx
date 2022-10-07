import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext, RegisterInterface } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { type ListFieldsRegisterType } from '../components/AuthInputList';
import { type AuthButtonType } from '../components/AuthButton';

const RegisterScreen = () => {
  const { registerUser } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const listFields: ListFieldsRegisterType[] = [
    { placeholder: 'Username', name: 'name' },
    { placeholder: 'Email', name: 'email' },
    { placeholder: 'Password', name: 'password' },
  ];

  const onSubmit = (data: RegisterInterface) => {
    registerUser(data);
  };

  const buttonProps: AuthButtonType[] = [
    {
      text: 'Register',
      onPress: handleSubmit(onSubmit),
    },
  ];

  return (
    <AuthForm
      title="Register for free"
      listFields={listFields}
      control={control}
      buttonProps={buttonProps}
    />
  );
};

export default RegisterScreen;
