import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  Keyboard, 
  TouchableWithoutFeedback, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const UserInfoScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = () => {
    alert('Contraseña cambiada con éxito.');
  };

  const handleSaveChanges = () => {
    alert('Cambios guardados exitosamente.');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name="person-outline" size={24} color="#3E3E3E" style={styles.icon} />
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.infoText}>Pedro</Text>
              </View>

              <View style={styles.infoRow}>
                <Icon name="person-outline" size={24} color="#3E3E3E" style={styles.icon} />
                <Text style={styles.label}>Apellido:</Text>
                <Text style={styles.infoText}>Suárez</Text>
              </View>

              <View style={styles.infoRow}>
                <Icon name="mail-outline" size={24} color="#3E3E3E" style={styles.icon} />
                <Text style={styles.label}>Correo:</Text>
                <Text style={styles.infoText}>Pedro.suarez14@gmail.com</Text>
              </View>
            </View>

            {/* Nueva Contraseña */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nueva Contraseña"
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                <Icon 
                  name={showNewPassword ? 'eye-off-outline' : 'eye-outline'} 
                  size={24} 
                  color="#3E3E3E" 
                />
              </TouchableOpacity>
            </View>

            {/* Confirmar Contraseña */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirmar Contraseña"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Icon 
                  name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} 
                  size={24} 
                  color="#3E3E3E" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
              <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Cambiar de Contraseña</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Icon name="save-outline" size={20} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.saveButtonText}>Guardar Cambios</Text>
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
    backgroundColor: '#E3F2FD',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    maxWidth: width * 0.9,
    alignItems: 'center',
    padding: 20,
  },
  infoContainer: {
    marginBottom: 20,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: '#3E3E3E',
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
    color: '#3E3E3E',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3E3E3E',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#42A5F5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserInfoScreen;
