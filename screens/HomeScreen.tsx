import { NavigationProp } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
  const { isLogged, signOut } = useContext(AuthContext);

  // useEffect(() => {
  //   signOut();
  // }, []);

  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <Image
        source={require('../assets/logoHomePage.png')}
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
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textInButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F6FDFE',
    borderRadius: 10,
    marginTop: 40,
    padding: 20,
    paddingHorizontal: 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#146b70',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  logoutBtn: {
    alignItems: 'center',
    backgroundColor: '#146B70',
    borderRadius: 5,
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  logoutText: {
    color: 'white',
  },
  textInButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
