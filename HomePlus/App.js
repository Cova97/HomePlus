import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ServiceRequestScreen from './components/ServiceRequestScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import PaymentMethodsScreen from './components/PaymentMethodsScreen';
import ServiceHistoryScreen from './components/ServiceHistoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* llamar Service */}
      <ServiceRequestScreen />
        
        {/* llamar ChangePassword */}
      {/* <ChangePasswordScreen /> */}
        
        {/* llamar PaymentMethods */}
      {/* <PaymentMethodsScreen /> */}
        
        {/* llamar ServiceHistory */}
      {/* <ServiceHistoryScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
