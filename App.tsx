import "react-native-gesture-handler";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TicketsScreen from "./screens/TicketsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";

type RootStackParamList = {
  Home: { initialRouteName: string };
  Login: { name: string };
  Projects: { name: string };
  Tickets: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

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
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "#F6FDFE",
            },
          }}
          name="Tickets"
          component={TicketsScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "#F6FDFE",
            },
          }}
          name="Projects"
          component={ProjectsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
