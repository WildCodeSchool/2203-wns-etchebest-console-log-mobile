import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppRegistry, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import TicketsScreen from "./screens/TicketsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export type RootStackParamList = {
  Home: { initialRouteName: string };
  Login: { name: string };
  Projects: { name: string };
  Tickets: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://192.168.1.195:4000/graphql",
  cache,
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("ConsoleLogApp", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
