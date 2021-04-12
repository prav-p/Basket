import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { useFonts } from 'expo-font';

import Tabs from './navigation/tabs';
import {Home,Item,Login,Landing,Search,Checkout,CreateAccount} from './screens';

const Stack = createStackNavigator();

const App = () => {
  
  const [loaded] = useFonts({
    "SignikaNegative-Bold" : require('./assets/fonts/SignikaNegative-Bold.ttf'),
    "SignikaNegative-SemiBold" : require('./assets/fonts/SignikaNegative-SemiBold.ttf'),
    "SignikaNegative-Regular" : require('./assets/fonts/SignikaNegative-Regular.ttf'),

  })
  
  if(!loaded){
    return null;
  }

  return(
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Landing"}
          >
          <Stack.Screen name="Basket" component={Checkout} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Asian Family Mar" component={Tabs} />
          <Stack.Screen name="Home" component={Home} /> 
          
          
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
