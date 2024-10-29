import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScheduleScreen = () => {
  const navigation = useNavigation();

  const handleSchedule = () => {
    alert('Cita agendada');
  };

  const handleImmediateService = () => {
    alert('Servicio solicitado inmediatamente');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/logo.jpeg')} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      <Text style={styles.title}>¿Para cuándo necesitas tu servicio?</Text>

      <TouchableOpacity style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Agendar cita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleImmediateService}>
        <Text style={styles.buttonText}>Pedir ahora</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Services')}>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#3E3E3E',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
});

export default ScheduleScreen;
