import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, 
  Platform, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const AppointmentScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('8:00'); // Aquí se guarda la hora seleccionada
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleSubmit = () => {
    navigation.navigate('Confirmation', { date, time, address });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Agenda tu cita</Text>
        
        <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <View style={styles.timeContainer}>
          <Text style={styles.label}>Hora</Text>
          <View style={styles.timeOptions}>
            {['8:00', '9:00', '10:00', '11:00', '12:00', '13:00'].map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.timeOption, 
                  time === item && styles.selectedTimeOption
                ]} 
                onPress={() => setTime(item)}
              >
                <Text style={[
                  styles.timeText, 
                  time === item && styles.selectedTimeText
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={address}
          onChangeText={setAddress}
        />

        <TextInput
          style={styles.input}
          placeholder="Descripción del problema"
          value={description}
          onChangeText={setDescription}
          multiline
          onBlur={() => Keyboard.dismiss()} // Cierra el teclado al salir del campo
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E3E3E',
  },
  datePicker: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
  timeContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    color: '#3E3E3E',
    fontSize: 16,
    marginBottom: 10,
  },
  timeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeOption: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedTimeOption: {
    backgroundColor: '#4FC3F7',
    borderColor: '#333',
  },
  timeText: {
    color: '#3E3E3E',
  },
  selectedTimeText: {
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#3E3E3E',
    fontSize: 16,
  },
});

export default AppointmentScreen;
