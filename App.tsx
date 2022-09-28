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

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://192.168.1.195:4000/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Login") {
                iconName = focused ? "log-in" : "log-in-outline";
              } else if (route.name === "Projects") {
                iconName = focused ? "bookmarks" : "bookmarks-outline";
              } else if (route.name === "Tickets") {
                iconName = focused ? "clipboard" : "clipboard-outline";
              }
              return (
                <Ionicons
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarStyle: { position: "absolute" },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
          <Tab.Screen name="Tickets" component={TicketsScreen} />
        </Tab.Navigator>
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
