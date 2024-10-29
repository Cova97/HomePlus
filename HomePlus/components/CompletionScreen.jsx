import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  ScrollView, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CompletionScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navegar a la pantalla de calificación del servicio
    navigation.navigate('Rating');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Logo */}
          <Image 
            source={require('../assets/logo.jpeg')} 
            style={styles.logo} 
            resizeMode="contain" 
          />

          <Text style={styles.title}>Servicio completado exitosamente</Text>

          {/* Icono de éxito */}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    maxWidth: width * 0.9,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    elevation: 5, // Sombra para mejorar el diseño
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 18,
    color: '#3E3E3E',
    marginBottom: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginTop: 10,
  },
  paymentInfo: {
    fontSize: 18,
    color: '#3E3E3E',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CompletionScreen;
