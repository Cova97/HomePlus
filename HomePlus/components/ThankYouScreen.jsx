// screens/ThankYouScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYouScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    // Navegar de regreso a la pantalla de servicios o a la pantalla principal
    navigation.navigate('Services');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Muchas gracias!</Text>
      <Text style={styles.subtitle}>Estamos para cuando lo necesites.</Text>
      {/* <Image source={require('../assets/smile.png')} style={styles.smileIcon} /> */}
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>Regresar</Text>
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
  subtitle: {
    fontSize: 18,
    color: '#3E3E3E',
    marginBottom: 20,
  },
  smileIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
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

export default ThankYouScreen;
