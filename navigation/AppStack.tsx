import "react-native-gesture-handler";
import { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import TicketsScreen from "../screens/TicketsScreen";
import { AuthContext } from "../context/AuthContext";

export type RootStackParamList = {
  Home: { initialRouteName: string };
  Login: { name: string; title: "string" };
  Projects: { name: string };
  Tickets: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerContent = (props: any) => {
  const { signOut } = useContext(AuthContext);
  const onSignOutPress = () => {
    console.log("Logged-out");
    signOut();
  };
  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          position: "relative",
        }}
      >
        <DrawerItemList {...props} />
        <DrawerItem
          icon={({ focused, size }) => (
            <Ionicons
              color={focused ? "#7cc" : "#ccc"}
              size={size}
              name={focused ? "log-out" : "log-out-outline"}
            />
          )}
          label="Sign out"
          onPress={onSignOutPress}
          style={{
            position: "absolute",
            bottom: 0,
            flex: 1,
            width: "93%",
          }}
        />
      </DrawerContentScrollView>
    </>
  );
};

const AppStackScreen = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "#146b70",
          drawerActiveTintColor: "#7cc",
        }}
        drawerContent={DrawerContent}
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
};
export default AppStackScreen;
