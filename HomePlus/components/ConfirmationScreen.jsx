// screens/ConfirmationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { date, time, address } = route.params;

  const handleNext = () => {
    // Navegar a la pantalla de finalización del servicio
    navigation.navigate('Completion');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu cita se ha programado con éxito.</Text>
      {/* <Image source={require('../assets/success.png')} style={styles.successIcon} /> */}
      <View style={styles.detailsContainer}>
        {/* <Image source={require('../assets/user.png')} style={styles.userIcon} /> */}
        <Text style={styles.userName}>Juan Pérez</Text>
        <Text style={styles.userRating}>★★★★★</Text>
        <View style={styles.confirmationDetails}>
          <Text style={styles.confirmationText}>Confirmación de datos</Text>
          <Text style={styles.confirmationText}>Día: {date.toLocaleDateString()}</Text>
          <Text style={styles.confirmationText}>Hora: {time}</Text>
          <Text style={styles.confirmationText}>Dirección: {address}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Siguiente</Text>
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
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  userRating: {
    color: '#FFD700',
    marginBottom: 10,
  },
  confirmationDetails: {
    alignItems: 'center',
  },
  confirmationText: {
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

export default ConfirmationScreen;
