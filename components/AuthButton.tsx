import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

export type AuthButtonType = {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export interface AuthButtonProps {
  buttonProps: AuthButtonType[];
}
const AuthButton = (props: AuthButtonProps) => {
  const { buttonProps } = props;
  return (
    <FlatList
      contentContainerStyle={styles.bntContainer}
      data={buttonProps}
      renderItem={({ item, index }) => (
        <TouchableOpacity key={index} style={styles.btn} onPress={item.onPress}>
          <Text key={index} style={styles.btnText}>
            {item.text}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  bntContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#146B70',
    marginVertical: 10,
    marginHorizontal: 10,
    width: 160,
  },
  btnText: {
    color: 'white',
  },
});

export default AuthButton;
