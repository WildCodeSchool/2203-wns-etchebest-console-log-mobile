// permet de customiser la barre de navigation
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props: any) => {
  const { signOut } = useContext(AuthContext);
  const onSignOutPress = () => {
    console.log("Logged-out");
    signOut();
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#146b70" }}
      >
        <ImageBackground
          source={require("../assets/backgroundImageMenu.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/profil.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "#FFF", fontSize: 18 }}>John Doe</Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={onSignOutPress}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={20} />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
