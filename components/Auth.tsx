import { Text, View, StyleSheet } from 'react-native';
import Auth from './AuthInputList';
import AuthButton, { type AuthButtonProps } from './AuthButton';
import { type AuthInputListType } from './AuthInputList';

interface AuthComponentInterface extends AuthInputListType, AuthButtonProps {
  title: string;
}

const AuthComponent = (props: AuthComponentInterface) => {
  const { title, listFields, control, buttonProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerForm}>
        <Auth listFields={listFields} control={control} />
        <AuthButton buttonProps={buttonProps} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73c6ce4d',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: '#146B70',
  },
  containerForm: {
    width: '100%',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});
export default AuthComponent;
