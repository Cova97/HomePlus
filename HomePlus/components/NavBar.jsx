import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  // Función para alternar el menú con animación
  const toggleMenu = () => {
    const toValue = menuOpen ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  // Definimos el estilo animado para el menú
  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300], // Altura del menú
  });

  return (
    <View style={styles.container}>
      {/* Ícono de menú de hamburguesa */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Contenedor del menú animado con scroll */}
      <Animated.View style={[styles.menuContainer, { height: menuHeight }]}>
        <ScrollView>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserInfo')}>
            <Text style={styles.menuItemText}>Mi cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PaymentMethods')}>
            <Text style={styles.menuItemText}>Métodos de pago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ServiceHistory')}>
            <Text style={styles.menuItemText}>Historial de servicios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TermsConditions')}>
            <Text style={styles.menuItemText}>Términos y Condiciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Help')}>
            <Text style={styles.menuItemText}>Ayuda</Text>
          </TouchableOpacity>

          {/* Botón de Cerrar sesión */}
          <TouchableOpacity 
            style={[styles.menuItem, styles.logoutButton]} 
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#B3E5FC', // Azul claro
    padding: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4, // Sombra en Android
    borderWidth: 0, // Eliminamos cualquier borde visible
  },
  menuText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  menuContainer: {
    marginTop: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    width: '80%',
    elevation: 5, 
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
    color: '#3E3E3E',
  },
  logoutButton: {
    backgroundColor: '#FF5252', // Botón de Cerrar sesión en rojo
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff', // Texto en blanco para el botón de Cerrar sesión
  },
});

export default NavBar;
