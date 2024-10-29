import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.goBack(); // Regresa a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Política de Privacidad</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>
          HOME+ es el responsable del tratamiento de los datos personales que nos proporcione. {"\n\n"}
          Los datos personales recabados serán utilizados para las siguientes finalidades: 
          {"\n\n"}
          La finalidad de tener sus datos consiste en mantener una base de datos para promociones y 
          encuestas que nos ayuden a brindar un servicio de excelencia.
          {"\n\n"}
          **Usted tiene derecho a:**
          {"\n"}- Rectificar sus datos personales en caso de error.
          {"\n"}- Solicitar la cancelación de sus datos personales.
          {"\n"}- Oponerse al tratamiento de sus datos personales si esto afecta sus intereses.
          {"\n\n"}
          **Los datos que se solicitan son los siguientes:**
          {"\n"}- Nombre
          {"\n"}- Número de teléfono
          {"\n"}- Domicilio
          {"\n"}- Correo electrónico
          {"\n"}- Datos bancarios
          {"\n\n"}
          Sus datos personales serán compartidos únicamente con HOME+ para cumplir con las finalidades 
          mencionadas. Puede consultar el aviso de privacidad integral en nuestra página web.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3E3E3E',
    borderBottomWidth: 2,
    borderColor: '#6200EE',
    paddingBottom: 5,
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#3E3E3E',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    width: width * 0.5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TermsAndConditionsScreen;
