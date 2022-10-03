import "react-native-gesture-handler";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TicketsScreen from "../screens/TicketsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  Home: { initialRouteName: string };
  Login: { name: string; title: "string" };
  Projects: { name: string };
  Tickets: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function AppStackScreen() {
  return (
    <>
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
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            title: "Projects",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "clipboard" : "clipboard-outline"}
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
          name="Projects"
          component={ProjectsScreen}
        />
        <Drawer.Screen
          options={{
            title: "Ticket",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "bookmarks" : "bookmarks-outline"}
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
          name="Tickets"
          component={TicketsScreen}
        />
      </Drawer.Navigator>
    </>
  );
}
