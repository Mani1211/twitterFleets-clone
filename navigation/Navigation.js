import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserFleets from './../screens/UserFleets';
import FleetsView from './../screens/FleetsView';

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="UserFleet">
      <Stack.Screen name="UserFleet" component={UserFleets} />
      <Stack.Screen name="FleetsView" component={FleetsView} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserFleet">
        <Stack.Screen name="UserFleet" component={UserFleets} />
        <Stack.Screen name="FleetsView" component={FleetsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
