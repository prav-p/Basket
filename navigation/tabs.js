import React from "react";
import { View, Image } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Home, Checkout } from "../screens";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Basket"
        component={Checkout}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.basket}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
