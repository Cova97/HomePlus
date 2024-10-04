import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos

const PaymentMethodsScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([
    { id: '1', number: '****2567' },
    { id: '2', number: '****8679' }
  ]);

  const handleAddPaymentMethod = () => {
    // Lógica para agregar un método de pago
  };

  return (
    <View style={styles.container}>
      {/* Título y descripción */}
      <View style={styles.header}>
        <Icon name="card-outline" size={24} color="#3E3E3E" />
        <Text style={styles.title}>Métodos de pago</Text>
      </View>
      <Text style={styles.subtitle}>
        Aquí puedes encontrar tus métodos de pago. Puedes crear, borrar o cambiarlos.
      </Text>

      {/* Métodos de pago existentes */}
      <Text style={styles.sectionTitle}>Métodos de pago</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paymentMethod}>
            <Icon name="card-outline" size={24} color="#3E3E3E" />
            <Text style={styles.paymentText}>{item.number}</Text>
          </View>
        )}
      />

      {/* Formulario para agregar un nuevo método de pago */}
      <Text style={styles.sectionTitle}>Agrega la información de pago</Text>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Información de la tarjeta</Text>

        {/* Campo de número de tarjeta */}
        <View style={styles.inputContainer}>
          <Icon name="card-outline" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Número de tarjeta"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        </View>

        {/* Campos de fecha de expiración y CVV */}
        <View style={styles.row}>
          <View style={styles.inputContainerSmall}>
            <Icon name="calendar-outline" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.inputSmall}
              placeholder="MM/AA"
              value={expiry}
              onChangeText={setExpiry}
            />
          </View>

          <View style={styles.inputContainerSmall}>
            <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.inputSmall}
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry
            />
          </View>
        </View>

        {/* Campo de país o región */}
        <View style={styles.inputContainer}>
          <Icon name="earth-outline" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="País o región"
            value={country}
            onChangeText={setCountry}
          />
        </View>

        {/* Botón para agregar método de pago */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddPaymentMethod}>
          <Text style={styles.addButtonText}>Agregar método de pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#3E3E3E',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#3E3E3E',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#3E3E3E',
    marginLeft: 10,
  },
  form: {
    backgroundColor: '#90CAF9',
    borderRadius: 8,
    padding: 20,
  },
  formTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#3E3E3E',
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainerSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '48%',
  },
  inputSmall: {
    flex: 1,
    color: '#3E3E3E',
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#3E3E3E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentMethodsScreen;
