// screens/CompletionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CompletionScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navegar a la pantalla de calificación del servicio
    navigation.navigate('Rating');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicio completado exitosamente</Text>
      {/* <Image source={require('../assets/success.png')} style={styles.successIcon} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Detalles del servicio:</Text>
        <Text style={styles.detailItem}>• Mano de obra: $200</Text>
        <Text style={styles.detailItem}>• Materiales: $500</Text>
        <Text style={styles.detailItem}>• Monto adicional por gasolina: $36</Text>
        <Text style={styles.total}>TOTAL: $736</Text>
        <Text style={styles.paymentInfo}>Cargo realizado a: VISA ****3454</Text>
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
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 16,
    color: '#3E3E3E',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginTop: 10,
  },
  paymentInfo: {
    fontSize: 16,
    color: '#3E3E3E',
    marginTop: 10,
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

export default CompletionScreen;
