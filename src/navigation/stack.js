import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";

import Home from "../screens/Home";
import LoginOptions from "../screens/LoginOptions";
import LoginWithEmail from "../screens/LoginWithEmail";
import ForgotPassword from "../screens/ForgotPassword";
import CreateAccount from "../screens/CreateAccount";

const RootStack = createStackNavigator();

const header = {
  headerBackTitle: " ",
  headerStyle: { height: 120, elevation: 0, shadowOpacity: 0 },
  headerTintColor: "#33336C",
  headerTitle: (
    props // App Logo
  ) => (
    <Image
      style={{ width: 200, height: 50 }}
      source={require("../assets/images/logoH.png")}
      resizeMode="contain"
    />
  ),
};

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
        initialRouteName="LoginOptions"
      >
        <RootStack.Screen
          options={{ headerShown: false }}
          name="LoginOptions"
          component={LoginOptions}
        />
        <RootStack.Screen
          options={{...header}}
          name="Login"
          component={LoginWithEmail}
        />
         <RootStack.Screen
          options={{...header}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
          <RootStack.Screen
          options={{...header}}
          name="CreateAccount"
          component={CreateAccount}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
