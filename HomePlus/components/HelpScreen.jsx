import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos
import { useNavigation } from '@react-navigation/native';

const faqs = [
  '¿Cómo cancelo un servicio?',
  '¿Cómo pido un servicio?',
  '¿Cómo funciona el reembolso?',
  '¿Qué pasa si el trabajador cancela mi servicio?',
  '¿Qué pasa si no aceptan mi servicio?',
  '¿Qué pasa si no llegan a mi ubicación?',
  '¿Cuál es el tiempo de espera para mi servicio?',
];

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preguntas frecuentes</Text>
      
      {/* Mapeamos y mostramos las preguntas frecuentes */}
      <View style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Icon name="ellipse-outline" size={20} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.faqText}>{faq}</Text>
          </View>
        ))}
      </View>

      {/* Botón de más ayuda */}
      
        <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('MoreHelp')}>
            <Text style={styles.helpButtonText}>¿Necesitas más ayuda?</Text>
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
    marginBottom: 20,
    color: '#3E3E3E',
  },
  faqContainer: {
    flex: 1,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  faqText: {
    fontSize: 16,
    color: '#3E3E3E',
  },
  helpButton: {
    backgroundColor: '#81D4FA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  helpButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HelpScreen;
