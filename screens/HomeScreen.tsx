import { useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import logoImage from '../assets/logoHomePage.png';
import COLORS from '../styles/colors';
import { RouterProps } from '../utils/types';

const HomeScreen: React.FC<RouterProps> = ({ navigation }: RouterProps) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <Image
        source={logoImage}
        style={{
          width: 350,
          height: 200,
          borderRadius: 20,
        }}
      />
      {!isLogged ? (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation?.navigate('Login')}
          >
            <Text testID="my-button" style={styles.textInButton}>
              Sign insss Something
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.whiteLightBlue,
    borderRadius: 10,
    marginTop: 40,
    padding: 20,
    paddingHorizontal: 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  textInButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
