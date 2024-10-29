import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  FlatList, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  Dimensions, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const PaymentMethodsScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([
    { id: '1', number: '****2567' },
    { id: '2', number: '****8679' },
  ]);

  const handleAddPaymentMethod = () => {
    if (cardNumber && expiry && cvv && country) {
      const newMethod = { id: Date.now().toString(), number: `****${cardNumber.slice(-4)}` };
      setPaymentMethods([...paymentMethods, newMethod]);
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setCountry('');
    } else {
      alert('Por favor, complete toda la información.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Icon name="card-outline" size={24} color="#3E3E3E" />
              <Text style={styles.title}>Métodos de Pago</Text>
            </View>

            <Text style={styles.subtitle}>
              Aquí puedes encontrar tus métodos de pago. Puedes crear, borrar o cambiarlos.
            </Text>

            <Text style={styles.sectionTitle}>Métodos de Pago</Text>
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

            <Text style={styles.sectionTitle}>Agrega la Información de Pago</Text>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Icon name="card-outline" size={24} color="#fff" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Número de Tarjeta"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                />
              </View>

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
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Icon name="earth-outline" size={24} color="#fff" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="País o Región"
                  value={country}
                  onChangeText={setCountry}
                />
              </View>

              <TouchableOpacity style={styles.addButton} onPress={handleAddPaymentMethod}>
                <Text style={styles.addButtonText}>Agregar Método de Pago</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: width * 0.9,
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
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentMethodsScreen;
