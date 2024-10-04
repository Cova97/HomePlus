import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ServicesScreen from './components/ServicesScreen'; // Aquí se mostrará NavBar
import ScheduleScreen from './components/ScheduleScreen';
import AppointmentScreen from './components/AppointmentScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import CompletionScreen from './components/CompletionScreen';
import RatingScreen from './components/RatingScreen';
import ThankYouScreen from './components/ThankYouScreen';
import UserInfoScreen from './components/UserInfoScreen';
import PaymentMethodsScreen from './components/PaymentMethodsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={styles.container}>
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
            <Stack.Screen name="UserInfo" component={UserInfoScreen} />
            <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
