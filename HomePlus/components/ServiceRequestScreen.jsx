// screens/ServiceRequestScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ServiceRequestScreen = ({ navigation }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: 'Plomero', id: 'plumber' },
    { name: 'Electricista', id: 'electrician' },
    { name: 'Jardinero', id: 'gardener' },
    { name: 'Cerrajero', id: 'locksmith' },
    { name: 'Carpintero', id: 'carpenter' },
    { name: 'Mecánico', id: 'mechanic' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Qué servicio necesitas?</Text>
      <View style={styles.buttonContainer}>
        {services.map((service) => (
          <Button
            key={service.id}
            title={service.name}
            onPress={() => setSelectedService(service.id)}
            color={selectedService === service.id ? 'blue' : 'grey'}
          />
        ))}
      </View>
      <View style={styles.accountMenu}>
        <Text style={styles.subtitle}>Mi cuenta</Text>
        <Button title="Métodos de pago" onPress={() => navigation.navigate('PaymentMethods')} />
        <Button title="Historial de servicios" onPress={() => navigation.navigate('ServiceHistory')} />
        <Button title="Términos y Condiciones" onPress={() => navigation.navigate('TermsAndConditions')} />
        <Button title="Ayuda" onPress={() => navigation.navigate('Help')} />
        <Button title="Cerrar sesión" onPress={() => {/* Logic to log out */}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  accountMenu: {
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  }
});

export default ServiceRequestScreen;
