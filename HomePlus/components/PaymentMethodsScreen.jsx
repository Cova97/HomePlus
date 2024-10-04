import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentMethodsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos de Pago</Text>
      <Text>Aquí se mostrarán los métodos de pago del usuario.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PaymentMethodsScreen;