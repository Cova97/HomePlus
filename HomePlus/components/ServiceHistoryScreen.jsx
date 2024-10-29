import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const servicesHistory = [
  { name: 'Servicio de plomería', date: '12/10/22', icon: 'water-outline', status: 'Completado' },
  { name: 'Servicio de electricista', date: '15/10/22', icon: 'flash-outline', status: 'Completado' },
  { name: 'Servicio de mecánico', date: '12/08/22', icon: 'cog-outline', status: 'Completado' },
];

const ServiceHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad Reciente</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  serviceStatus: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 5,
  },
  serviceDate: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  backButton: {
    backgroundColor: '#81D4FA',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ServiceHistoryScreen;
