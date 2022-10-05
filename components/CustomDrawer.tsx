// permet de customiser la barre de navigation
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../lib/queries/getOneUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const CustomDrawer = (props: any) => {
  /* Fonction pour se déconnecter */
  const { signOut } = useContext(AuthContext);
  const onSignOutPress = () => {
    signOut();
  };

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
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
  if (data) {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.containerStyle}
        >
          <ImageBackground
            source={require("../assets/backgroundImageMenu.jpeg")}
            style={styles.paddingImageBackground}
          >
            <Image
              source={require("../assets/profil.png")}
              style={styles.imageCustom}
            />
            <Text style={styles.textName}>{data.user.name}</Text>
            <Text style={styles.textEmail}>{data.user.email}</Text>
          </ImageBackground>
          {/* Récupère en props toute la drawerItemList dans navigation/AppStack.tsx */}
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
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "#146b70",
  },
  paddingImageBackground: {
    padding: 20,
  },
  imageCustom: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  textName: {
    color: "#FFF",
    fontSize: 18,
    paddingLeft: 5,
  },
  textEmail: {
    color: "#FFF",
    fontSize: 18,
    paddingLeft: 5,
    marginTop: 3,
  },
  drawerItemListCustom: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  viewBottom: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  paddingTouchableOpacity: {
    paddingVertical: 15,
  },
  viewLogout: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLogout: {
    fontSize: 15,
    marginLeft: 10,
  },
});

export default CustomDrawer;
