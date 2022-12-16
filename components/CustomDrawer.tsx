import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useContext, useState, useEffect } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { GET_ONE_USER } from '../lib/queries/userRequest';
import { AuthContext } from '../context/AuthContext';
import COLORS from '../styles/colors';
import backgroundImage from '../assets/backgroundImageMenu.jpeg';
import profileImage from '../assets/profil.png';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { signOut } = useContext(AuthContext);
  const onSignOutPress = () => {
    signOut();
  };

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const jwt = jwt_decode<{ user: string }>(token);
        setUser(jwt.user);
      }
    };
    getToken();
  }, []);

  const { data, error, loading } = useQuery(GET_ONE_USER, {
    variables: {
      where: {
        email: user,
      },
    },
    skip: !user,
  });
  if (error) {
    return <Text>Error</Text>;
  }
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (!data) return null;

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.paddingImageBackground}
        >
          <Image source={profileImage} style={styles.imageCustom} />
          <Text style={styles.textName}>{data.user.name}</Text>
          <Text style={styles.textEmail}>{data.user.email}</Text>
        </ImageBackground>
        <View style={styles.drawerItemListCustom}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.viewBottom}>
        <TouchableOpacity
          onPress={onSignOutPress}
          style={styles.paddingTouchableOpacity}
        >
          <View style={styles.viewLogout}>
            <Ionicons name="exit-outline" size={20} />
            <Text style={styles.textLogout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: COLORS.primary,
  },
  drawerItemListCustom: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 10,
  },
  imageCustom: {
    borderRadius: 40,
    height: 80,
    marginBottom: 10,
    marginTop: 10,
    width: 80,
  },
  paddingImageBackground: {
    padding: 20,
  },
  paddingTouchableOpacity: {
    paddingVertical: 15,
  },
  textEmail: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 3,
    paddingLeft: 5,
  },
  textLogout: {
    fontSize: 15,
    marginLeft: 10,
  },
  textName: {
    color: COLORS.white,
    fontSize: 18,
    paddingLeft: 5,
  },
  viewBottom: {
    borderTopColor: COLORS.lightGray,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  viewLogout: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CustomDrawer;
