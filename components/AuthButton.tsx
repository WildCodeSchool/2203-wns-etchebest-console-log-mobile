import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import COLORS from '../styles/colors';

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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    width: 160,
  },
  btnText: {
    color: COLORS.white,
  },
});

export default AuthButton;
