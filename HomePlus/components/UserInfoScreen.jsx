import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos

const UserInfoScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    // Lógica para cambiar la contraseña
  };

  const handleSaveChanges = () => {
    // Lógica para guardar los cambios
  };

  return (
    <View style={styles.container}>
      {/* Información del usuario con íconos */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="person-outline" size={20} color="#3E3E3E" style={styles.icon} />
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.infoText}>Pedro</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="person-outline" size={20} color="#3E3E3E" style={styles.icon} />
          <Text style={styles.label}>Apellido:</Text>
          <Text style={styles.infoText}>Suárez</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={20} color="#3E3E3E" style={styles.icon} />
          <Text style={styles.label}>Correo electrónico:</Text>
          <Text style={styles.infoText}>Pedro.suarez14@gmail.com</Text>
        </View>
      </View>

      {/* Campo para nueva contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Campo para confirmar contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Botón para cambiar la contraseña con ícono */}
      <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
        <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Cambiar de contraseña</Text>
      </TouchableOpacity>

      {/* Botón para guardar cambios con ícono */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Icon name="save-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Fondo blanco
  },
  infoContainer: {
    marginBottom: 20,
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
  input: {
    borderWidth: 1,
    borderColor: '#3E3E3E',
    backgroundColor: '#E3F2FD', // Azul claro para los campos de contraseña
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: '#3E3E3E',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#90CAF9', // Azul claro para el botón
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    backgroundColor: '#90CAF9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserInfoScreen;
