import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PalaceScreen from "../screens/palace";
import KingScreen from "../screens/king";
import QueenScreen from "../screens/queen";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* 
            <TabScreen name="Ride" component={RideScreen} />
            <TabScreen name="Ride History" component={RideHistoryScreen} />
          */}

          {/* 
            <Tab.Screen name="Ride" />
            <Tab.Screen name="Ride History" />
          */}

          {/* 
            <Screen name="Ride" component={RideScreen} />
            <Screen name="Ride History" component={RideHistoryScreen} />
          */}

          
            <Tab.Screen name="Palace" component={PalaceScreen} />
            <Tab.Screen name="King" component={KingScreen} />
            <Tab.Screen name="Queen" component={QueenScreen} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
