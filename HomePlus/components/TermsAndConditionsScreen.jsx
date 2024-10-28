// screens/TermsAndConditionsScreen.jsx
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.goBack(); // Regresa a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Política de privacidad</Text>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>
          HOME+ es el responsable del tratamiento de los datos personales que nos proporcione. {"\n\n"}
          Los datos personales recabados serán utilizados para las siguientes finalidades: 
          {"\n\n"}
          La finalidad de tener sus datos consiste en tener una base de datos para promociones y 
          encuestas que nos ayuden a llevar un control de calidad para brindar un servicio de excelencia.
          {"\n\n"}
          Usted tiene derecho a:
          {"\n"}- Rectificar sus datos personales en caso de error.
          {"\n"}- Solicitar la cancelación de sus datos personales.
          {"\n"}- Oponerse al tratamiento de sus datos personales por daños o perjuicios a sus intereses.
          {"\n\n"}
          Los datos que se solicitan son los siguientes:
          {"\n"}- Nombre
          {"\n"}- Número de teléfono
          {"\n"}- Domicilio
          {"\n"}- Correo electrónico
          {"\n"}- Datos bancarios
          {"\n\n"}
          Sus datos personales serán compartidos únicamente con Home+ para cumplir con las finalidades 
          mencionadas. Usted podrá consultar el aviso de privacidad integral en nuestra página web.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleAccept}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3E3E3E',
    borderBottomWidth: 2,
    borderColor: '#6200EE',
    paddingBottom: 5,
  },
  content: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#3E3E3E',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;
