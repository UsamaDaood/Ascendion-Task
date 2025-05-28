import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import CalculatorScreen from '../screens/QuestionOne';
import NavbarPage from '../screens/NavbarScreen';
import TwoSumScreen from '../screens/TwoSumScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      <Stack.Screen name="NavbarPage" component={NavbarPage} />
      <Stack.Screen name="TwoSumScreen" component={TwoSumScreen} />
    </Stack.Navigator>
  );
}

export default () => <AppNavigator />;
