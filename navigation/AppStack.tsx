import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import TicketsScreen from '../screens/TicketsScreen';
import CustomDrawer from '../components/CustomDrawer';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList = {
  Home: { initialRouteName: string };
  Login: { name: string; title: 'string' };
  Projects: { name: string };
  Tickets: { name: string };
  Profile: { name: string };
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const AppStackScreen = () => (
  <>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: '#146b70',
        drawerActiveBackgroundColor: '#146b70',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: '#F6FDFE',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? '#FFFFFF' : '#333'}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Projects',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'clipboard' : 'clipboard-outline'}
              size={size}
              color={focused ? '#FFFFFF' : '#333'}
            />
          ),
        }}
        name="Projects"
        component={ProjectsScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Ticket',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'bookmarks' : 'bookmarks-outline'}
              size={size}
              color={focused ? '#FFFFFF' : '#333'}
            />
          ),
        }}
        name="Tickets"
        component={TicketsScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={focused ? '#FFFFFF' : '#333'}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  </>
);
export default AppStackScreen;
