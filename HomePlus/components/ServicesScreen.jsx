// screens/ServicesScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const services = [
  { name: 'Plomero' },
  { name: 'Electricista'},
  { name: 'Jardinero'},
  { name: 'Cerrajero'},
  { name: 'Carpintero'},
  { name: 'Mecánico'},
];

const ServicesScreen = () => {
  const navigation = useNavigation();

  const handleServiceSelection = (service) => {
    // Aquí puedes agregar la lógica para seleccionar un servicio
    navigation.navigate('Appointment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué servicio necesitas?</Text>
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.serviceItem} onPress={() => handleServiceSelection(service)}>
            <Image source={service.icon} style={styles.serviceIcon} />
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pedir servicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
  },
  serviceIcon: {
    width: 60,
    height: 60,
  },
  serviceName: {
    marginTop: 10,
    fontSize: 16,
    color: '#3E3E3E',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
});

export default ServicesScreen;
