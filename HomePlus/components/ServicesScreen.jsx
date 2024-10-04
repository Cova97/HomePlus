import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar'; // Importamos el NavBar

// Lista de servicios disponibles
const services = [
  { name: 'Plomero' },
  { name: 'Electricista' },
  { name: 'Jardinero' },
  { name: 'Cerrajero' },
  { name: 'Carpintero' },
  { name: 'Mecánico' },
];

const ServicesScreen = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null); // Estado para el servicio seleccionado

  // Maneja la selección de un servicio
  const handleServiceSelection = (service) => {
    setSelectedService(service); // Guarda el servicio seleccionado
  };

  // Navega a AppointmentScreen solo si hay un servicio seleccionado
  const handleServiceRequest = () => {
    if (selectedService) {
      navigation.navigate('Appointment', { service: selectedService.name }); // Pasa el servicio seleccionado a la pantalla de Appointment
    } else {
      alert('Por favor selecciona un servicio antes de continuar.'); // Alerta si no se ha seleccionado un servicio
    }
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>¿Qué servicio necesitas?</Text>

      {/* Contenedor que mapea y muestra los servicios */}
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.serviceItem, 
              selectedService === service && styles.selectedServiceItem // Aplica un estilo diferente si está seleccionado
            ]} 
            onPress={() => handleServiceSelection(service)}>
            <Text style={[
              styles.serviceName, 
              selectedService === service && styles.selectedServiceName // Cambia el color del texto si está seleccionado
            ]}>
              {service.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botón para pedir servicio */}
      <TouchableOpacity style={styles.button} onPress={handleServiceRequest}>
        <Text style={styles.buttonText}>Pedir servicio</Text>
      </TouchableOpacity>

      {/* El NavBar solo se muestra en esta pantalla */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC', // Fondo azul claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E', // Color oscuro para el título
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Organiza los servicios en filas
    justifyContent: 'space-around',
    width: '100%',
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff', // Fondo blanco para cada servicio
    borderRadius: 5,
    elevation: 2, // Sombra leve para dar sensación de profundidad
  },
  selectedServiceItem: {
    backgroundColor: '#81D4FA', // Fondo diferente para el servicio seleccionado
  },
  serviceName: {
    fontSize: 16,
    color: '#3E3E3E', // Texto oscuro
  },
  selectedServiceName: {
    color: '#fff', // Texto blanco para el servicio seleccionado
  },
  button: {
    backgroundColor: '#fff', // Fondo blanco para el botón
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 2, // Sombra para el botón
  },
  buttonText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
});

export default ServicesScreen;
