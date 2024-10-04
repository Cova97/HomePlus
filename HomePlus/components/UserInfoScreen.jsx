import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Usuario</Text>
      <Text>Aquí se mostrará la información del usuario.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UserInfoScreen;