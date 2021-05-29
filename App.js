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
  AsianBeef,
  AsianPork,
  AsianFruits,
  AsianOrganicProd,
  AsianVeg,
  EuroButter,
  EuroMilk,
  EuroCheese,
  EuroChocolate,
  EuroCoWaf,
  EuroGummies,
  EuroCereal,
  EuroPasta,
  EuroFlour,
  EuroHerring,
  EuroJam,
  EuroVeg,
  EuroMustard,
  EuroKetchup,
  EuroHoney,
  MendozaMilk,
  MendozaCheese,
  MendozaChoco,
  MendozaSaladitos,
  MendozaCandies,
  MendozaSpices,
  MendozaCanned,
  MendozaFlour,
  MendozaSalsa,
  MendozaMole,
  MendozaBeans,
  MendozaPasta,
  MendozaRice,
  MendozaTT,
  ThankYou,
} from "./screens";

const Stack = createStackNavigator();
const App = () => {
  const [loaded] = useFonts({
    "SignikaNegative-Bold": require("./assets/fonts/SignikaNegative-Bold.ttf"),
    "SignikaNegative-SemiBold": require("./assets/fonts/SignikaNegative-SemiBold.ttf"),
    "SignikaNegative-Regular": require("./assets/fonts/SignikaNegative-Regular.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-BlackItalic": require("./assets/fonts/Montserrat-BlackItalic.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-BoldItalic": require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-MediumItalic": require("./assets/fonts/Montserrat-MediumItalic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-SemiBoldItalic": require("./assets/fonts/Montserrat-SemiBoldItalic.ttf"),
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
        <Stack.Screen name="MendozaMilk" component={MendozaMilk} />
        <Stack.Screen name="MendozaCheese" component={MendozaCheese} />
        <Stack.Screen name="MendozaChoco" component={MendozaChoco} />
        <Stack.Screen name="MendozaSaladitos" component={MendozaSaladitos} />
        <Stack.Screen name="MendozaCandies" component={MendozaCandies} />
        <Stack.Screen name="MendozaSpices" component={MendozaSpices} />
        <Stack.Screen name="MendozaCanned" component={MendozaCanned} />
        <Stack.Screen name="MendozaFlour" component={MendozaFlour} />
        <Stack.Screen name="MendozaSalsa" component={MendozaSalsa} />
        <Stack.Screen name="MendozaMole" component={MendozaMole} />

        <Stack.Screen name="MendozaBeans" component={MendozaBeans} />
        <Stack.Screen name="MendozaPasta" component={MendozaPasta} />
        <Stack.Screen name="MendozaRice" component={MendozaRice} />
        <Stack.Screen name="MendozaTT" component={MendozaTT} />
        <Stack.Screen name="European" component={European} />
        <Stack.Screen name="AsianMilk" component={AsianMilk} />
        <Stack.Screen name="AsianEggs" component={AsianEggs} />
        <Stack.Screen name="AsianCheese" component={AsianCheese} />
        <Stack.Screen name="AsianBnS" component={AsianBnS} />
        <Stack.Screen name="AsianSeafood" component={AsianSeafood} />
        <Stack.Screen name="AsianBeef" component={AsianBeef} />
        <Stack.Screen name="AsianPork" component={AsianPork} />
        <Stack.Screen name="AsianFruits" component={AsianFruits} />
        <Stack.Screen name="AsianOrganicProd" component={AsianOrganicProd} />
        <Stack.Screen name="AsianVeg" component={AsianVeg} />
        <Stack.Screen name="EuroButter" component={EuroButter} />
        <Stack.Screen name="EuroMilk" component={EuroMilk} />
        <Stack.Screen name="EuroCheese" component={EuroCheese} />
        <Stack.Screen name="EuroChocolate" component={EuroChocolate} />
        <Stack.Screen name="EuroCoWaf" component={EuroCoWaf} />
        <Stack.Screen name="EuroGummies" component={EuroGummies} />
        <Stack.Screen name="EuroCereal" component={EuroCereal} />
        <Stack.Screen name="EuroPasta" component={EuroPasta} />
        <Stack.Screen name="EuroFlour" component={EuroFlour} />
        <Stack.Screen name="EuroHerring" component={EuroHerring} />
        <Stack.Screen name="EuroJam" component={EuroJam} />
        <Stack.Screen name="EuroVeg" component={EuroVeg} />
        <Stack.Screen name="EuroMustard" component={EuroMustard} />
        <Stack.Screen name="EuroKetchup" component={EuroKetchup} />
        <Stack.Screen name="EuroHoney" component={EuroHoney} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="ThankYou" component={ThankYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
