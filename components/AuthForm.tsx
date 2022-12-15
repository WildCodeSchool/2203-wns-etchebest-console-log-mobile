import { Text, View, StyleSheet } from 'react-native';
import COLORS from '../styles/colors';
import AuthButton, { type AuthButtonProps } from './AuthButton';
import AuthInputList, { type AuthInputListType } from './AuthInputList';

interface AuthFormInterface extends AuthInputListType, AuthButtonProps {
  title: string;
}

const AuthForm = (props: AuthFormInterface) => {
  const { title, listFields, control, buttonProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerForm}>
        <AuthInputList listFields={listFields} control={control} />
        <AuthButton buttonProps={buttonProps} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
});
export default AuthForm;
