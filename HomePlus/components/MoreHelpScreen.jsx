import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos
import { useNavigation } from '@react-navigation/native';

const MoreHelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Necesitas más ayuda?</Text>
      <Text style={styles.subtitle}>Si necesitas ayuda, comunícate con nosotros por alguno de los siguientes medios</Text>

      {/* Opciones de contacto */}
      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Teléfono</Text>
          <Icon name="call-outline" size={40} color="#000" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Whatsapp</Text>
          <Icon name="logo-whatsapp" size={40} color="#25D366" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Email</Text>
          <Icon name="mail-outline" size={40} color="#000" style={styles.icon} />
        </TouchableOpacity>
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
    color: '#3E3E3E',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#3E3E3E',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    width: '80%',
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    elevation: 2, // Sombra leve para dar profundidad
  },
  contactText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  icon: {
    marginLeft: 20,
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

export default MoreHelpScreen;
