import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

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
      <Text style={styles.title}>Preguntas Frecuentes</Text>

      <ScrollView contentContainerStyle={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Icon name="help-circle-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.faqText}>{faq}</Text>
          </View>
        ))}
      </ScrollView>

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
  faqContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  faqText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  helpButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  helpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HelpScreen;
