// screens/ServiceHistoryScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ServiceHistoryScreen = () => {
  // Datos de ejemplo, estos deberían ser cargados desde un servidor en una aplicación real
  const [services, setServices] = useState([
    { id: '1', type: 'Plomería', date: '12/10/22', status: 'Completado' },
    { id: '2', type: 'Electricista', date: '15/10/22', status: 'Completado' },
    { id: '3', type: 'Mecánico', date: '12/08/22', status: 'Completado' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.type}</Text>
      <Text style={styles.text}>{item.date}</Text>
      <Text style={styles.text}>{item.status}</Text>
    </View>
  );

  return (
    <FlatList
      data={services}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  }
});

export default ServiceHistoryScreen;
