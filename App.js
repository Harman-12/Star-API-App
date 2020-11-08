import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/Home";
import StarScreen from "./screens/Star";

export default function App() {
  return <AppContainer />;
}

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Star: {
      screen: StarScreen,
      navigationOptions: {
        headerTitle: "",
        headerStyle: {
          backgroundColor: "#1A2D5F",
          borderWidth: 0
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
