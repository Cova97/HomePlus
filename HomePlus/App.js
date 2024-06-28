// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ServicesScreen from './components/ServicesScreen';
import ScheduleScreen from './components/ScheduleScreen';
import AppointmentScreen from './components/AppointmentScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import CompletionScreen from './components/CompletionScreen';
import RatingScreen from './components/RatingScreen';
import ThankYouScreen from './components/ThankYouScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Completion" component={CompletionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rating" component={RatingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
