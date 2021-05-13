import React from "react";
import { View, Image } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Search, Home, Checkout } from "../screens";
import { icons, COLORS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          shadowColor: COLORS.primary,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 9,
          shadowOpacity: 0.4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Basket"
        component={Checkout}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
              <Image
                source={icons.basket}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
