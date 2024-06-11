// screens/PaymentMethodsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentMethodsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos de Pago</Text>
      <Button title="Agregar Método de Pago" onPress={() => {/* Lógica para agregar método de pago */}} />
      <Button title="Editar Método de Pago Existente" onPress={() => {/* Lógica para editar método de pago */}} />
      <Button title="Eliminar Método de Pago" onPress={() => {/* Lógica para eliminar método de pago */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  }
});

export default PaymentMethodsScreen;
