import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/TicketsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

export type RootStackParamList = {
  Home: { initialRouteName: string };
  Authentificate: { name: string };
  Projects: { name: string };
  Tickets: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const AppStackScreen = () => {
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
    </>
  );
};

export default AppStackScreen;
