import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MoreHelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Necesitas más ayuda?</Text>
      <Text style={styles.subtitle}>
        Si necesitas ayuda, comunícate con nosotros por alguno de los siguientes medios.
      </Text>

      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="call-outline" size={30} color="#000" />
          <Text style={styles.contactText}>Teléfono</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton}>
          <Icon name="logo-whatsapp" size={30} color="#25D366" />
          <Text style={styles.contactText}>Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton}>
          <Icon name="mail-outline" size={30} color="#000" />
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#3E3E3E',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactContainer: {
    width: '100%',
    marginBottom: 30,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    elevation: 3, // Sombra leve para dar profundidad
  },
  contactText: {
    fontSize: 18,
    color: '#3E3E3E',
    marginLeft: 20,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: width * 0.6,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MoreHelpScreen;
