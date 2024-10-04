import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos
import { useNavigation } from '@react-navigation/native';

const servicesHistory = [
  { name: 'Servicio de plomería', date: '12/10/22', icon: 'water-outline', status: 'Completado' },
  { name: 'Servicio de electricista', date: '15/10/22', icon: 'flash-outline', status: 'Completado' },
  { name: 'Servicio de mecánico', date: '12/08/22', icon: 'cog-outline', status: 'Completado' },
];

const ServiceHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad reciente</Text>
      
      {/* Mapeamos y mostramos el historial de servicios */}
      <View style={styles.historyContainer}>
        {servicesHistory.map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <Icon name={service.icon} size={40} color="#3E3E3E" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceStatus}>{service.status}</Text>
              <Text style={styles.serviceDate}>{service.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Botón para regresar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E',
  },
  historyContainer: {
    flex: 1,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  serviceStatus: {
    fontSize: 14,
    color: '#757575',
  },
  serviceDate: {
    fontSize: 14,
    color: '#757575',
  },
  backButton: {
    backgroundColor: '#81D4FA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ServiceHistoryScreen;
