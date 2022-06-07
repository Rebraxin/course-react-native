import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            headerStyle: { backgroundColor: "#3C0A6B" },
            headerTintColor: "#ffffff",
            tabBarActiveBackgroundColor: "#F0E1FF",
            tabBarActiveTintColor: "#3C0A6B",
            tabBarStyle: { backgroundColor: "#FFFFFF" },
            // drawerActiveBackgroundColor: "#F0E1FF",
            // drawerActiveTintColor: "#3C0A6B",
            // drawerStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <BottomTab.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
              tabBarLabel: "Welcome",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='home' color={color} size={size} />
              ),
            }}
            // options={{
            //   drawerLabel: "Welcome Screen",
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name='home' color={color} size={size} />
            //   ),
            // }}
          />
          <BottomTab.Screen
            name='User'
            component={UserScreen}
            options={{
              tabBarLabel: "User",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='person' color={color} size={size} />
              ),
            }}
            // options={{
            //   drawerLabel: "User Screen",
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name='person' color={color} size={size} />
            //   ),
            // }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
