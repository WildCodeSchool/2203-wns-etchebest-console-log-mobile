import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
/* import { enableScreens } from "react-native-screens";

enableScreens(); */

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerTintColor: "#146b70" }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "#F6FDFE",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "#F6FDFE",
            },
          }}
          name="Login"
          component={LoginScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
