import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Login from "../screens/Login";

const RootStack = createStackNavigator();

export function screens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export function loginScreens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
