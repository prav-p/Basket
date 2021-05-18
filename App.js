import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import {
  Home,
  Item,
  Login,
  Landing,
  Checkout,
  CreateAccount,
  Asian,
  Mendoza,
  European,
  AsianMilk,
  AsianCheese,
  AsianEggs,
  AsianBnS,
  AsianSeafood,
} from "./screens";

const Stack = createStackNavigator();
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
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create An Account" component={CreateAccount} />
        <Stack.Screen name="Asian" component={Asian} />
        <Stack.Screen name="Mendoza" component={Mendoza} />
        <Stack.Screen name="European" component={European} />
        <Stack.Screen name="AsianMilk" component={AsianMilk} />
        <Stack.Screen name="AsianEggs" component={AsianEggs} />
        <Stack.Screen name="AsianCheese" component={AsianCheese} />
        <Stack.Screen name="AsianBnS" component={AsianBnS} />
        <Stack.Screen name="AsianSeafood" component={AsianSeafood} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
