import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { type AuthButtonType } from '../components/AuthButton';
import AuthForm from '../components/AuthForm';
import { type ListFieldsSignInType } from '../components/AuthInputList';
import { AuthContext, SignInInterface } from '../context/AuthContext';

interface RouterProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen = ({ navigation }: RouterProps) => {
  const { signIn } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const listFields: ListFieldsSignInType[] = [
    { placeholder: 'Email', name: 'email' },
    { placeholder: 'Password', name: 'password' },
  ];

  const onSubmit = (data: SignInInterface) => {
    signIn(data);
  };

  const buttonProps: AuthButtonType[] = [
    {
      text: 'Log in',
      onPress: handleSubmit(onSubmit),
    },
    {
      text: 'Create an account',
      onPress: () => navigation.navigate('Register'),
    },
  ];

  return (
    <AuthForm
      title="Console.log"
      listFields={listFields}
      control={control}
      buttonProps={buttonProps}
    />
  );
};

export default LoginScreen;
