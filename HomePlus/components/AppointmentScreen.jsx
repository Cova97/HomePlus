import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const { width, height } = Dimensions.get('window');

const generateTimes = () => {
  const times = [];
  for (let hour = 7; hour <= 21; hour++) {
    times.push({ label: `${hour}:00`, value: `${hour}:00` });
  }
  return times;
};

const AppointmentScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [address, setAddress] = useState('');
  const [problemDetails, setProblemDetails] = useState('');
  const navigation = useNavigation();

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    if (!selectedTime) {
      alert('Por favor selecciona un horario.');
      return;
    }
    navigation.navigate('Confirmation', {
      date,
      time: selectedTime,
      address,
      problemDetails,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Image 
              source={require('../assets/logo.jpeg')} 
              style={styles.logo} 
              resizeMode="contain" 
            />
            <Text style={styles.title}>Agenda tu cita</Text>

            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.datePicker}
            >
              <Text style={styles.dateText}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}

            <Text style={styles.label}>Selecciona un horario:</Text>

            <RNPickerSelect
              onValueChange={(value) => setSelectedTime(value)}
              items={generateTimes()}
              style={pickerSelectStyles}
              placeholder={{ label: 'Selecciona un horario', value: null }}
            />

            <TextInput
              style={styles.input}
              placeholder="Dirección"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Detalles del problema"
              value={problemDetails}
              onChangeText={setProblemDetails}
              multiline
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
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
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#3E3E3E',
  },
  datePicker: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  label: {
    marginBottom: 5,
    color: '#3E3E3E',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  inputAndroid: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default AppointmentScreen;
