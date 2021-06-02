import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserFleets from './screens/UserFleets';
import FleetsView from './screens/FleetsView';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserFleet"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="UserFleet" component={UserFleets} />
        <Stack.Screen name="FleetsView" component={FleetsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
