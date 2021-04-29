import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Tabs from "./navigation/tabs";
import {
  Home,
  Item,
  Login,
  Landing,
  Search,
  Checkout,
  CreateAccount,
  Asian,
  Mendoza,
  European
} from "./screens";
// import Asian from './screens/Asian';
// import Mendoza from './screens/Mendoza';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const [loaded] = useFonts({
    "SignikaNegative-Bold": require("./assets/fonts/SignikaNegative-Bold.ttf"),
    "SignikaNegative-SemiBold": require("./assets/fonts/SignikaNegative-SemiBold.ttf"),
    "SignikaNegative-Regular": require("./assets/fonts/SignikaNegative-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Landing"}
      >
        <Stack.Screen name="Basket" component={Checkout} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Asian Family Mart" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create An Account" component={CreateAccount} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Asian" component={Asian} />
        <Stack.Screen name="Mendoza" component={Mendoza} />
        <Stack.Screen name="European" component={European} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
