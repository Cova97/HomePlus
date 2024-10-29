import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform, 
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ConfirmationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { date, time, address, problemDetails } = route.params;

  const handleNext = () => {
    navigation.navigate('Completion');
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

          <Text style={styles.title}>Tu cita se ha programado con éxito</Text>

          <View style={styles.userInfoContainer}>
            <Icon 
              name="person-circle-outline" 
              size={60} 
              color="#0288D1" 
              style={styles.userIcon} 
            />
            <View>
              <Text style={styles.userName}>Juan Pérez</Text>
              <Text style={styles.userRating}>★★★★★</Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.confirmationText}>Día: {date.toLocaleDateString()}</Text>
            <Text style={styles.confirmationText}>Hora: {time}</Text>
            <Text style={styles.confirmationText}>Dirección: {address}</Text>
            <Text style={styles.confirmationText}>Detalles del problema: {problemDetails}</Text>
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
    padding: 20,
    alignItems: 'center',
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
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    marginRight: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  userRating: {
    fontSize: 18,
    color: '#FFD700',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#3E3E3E',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;
