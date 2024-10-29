import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from './NavBar';

const { width, height } = Dimensions.get('window'); // Obtiene ancho y alto de la pantalla

const services = [
  { name: 'Plomero', icon: 'water-outline' },
  { name: 'Electricista', icon: 'flash-outline' },
  { name: 'Jardinero', icon: 'leaf-outline' },
  { name: 'Cerrajero', icon: 'lock-closed-outline' },
  { name: 'Carpintero', icon: 'construct-outline' },
  { name: 'Mecánico', icon: 'cog-outline' },
];

const ServicesScreen = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleServiceRequest = () => {
    if (selectedService) {
      navigation.navigate('Appointment', { service: selectedService.name });
    } else {
      alert('Por favor selecciona un servicio antes de continuar.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <Image 
          source={require('../assets/logo.jpeg')} 
          style={styles.logo} 
          resizeMode="contain" 
        />

        <View style={styles.container}>
          <Text style={styles.title}>¿Qué servicio necesitas?</Text>
          <View style={styles.servicesContainer}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.serviceItem,
                  selectedService === service && styles.selectedServiceItem,
                ]}
                onPress={() => handleServiceSelection(service)}
              >
                <Icon
                  name={service.icon}
                  size={30}
                  color={selectedService === service ? '#fff' : '#3E3E3E'}
                />
                <Text
                  style={[
                    styles.serviceName,
                    selectedService === service && styles.selectedServiceName,
                  ]}
                >
                  {service.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleServiceRequest}>
            <Text style={styles.buttonText}>Pedir servicio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 50,
    top: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E',
    textAlign: 'center',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    width: width * 0.3,
  },
  selectedServiceItem: {
    backgroundColor: '#81D4FA',
  },
  serviceName: {
    fontSize: 16,
    color: '#3E3E3E',
    marginTop: 5,
  },
  selectedServiceName: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen;
