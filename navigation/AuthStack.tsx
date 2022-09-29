// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

// const Stack = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <LoginScreen />
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="Login" component={LoginScreen} />
    //   <Stack.Screen name="Register" component={RegisterScreen} />
    // </Stack.Navigator>
  );
};

export default AuthStack;
