import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = menuOpen ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      <Animated.View 
        style={[
          styles.menuContainer, 
          { transform: [{ translateY }] }
        ]}
      >
        <ScrollView>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('UserInfo'); toggleMenu(); }}>
            <Text style={styles.menuItemText}>Mi cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('PaymentMethods'); toggleMenu(); }}>
            <Text style={styles.menuItemText}>Métodos de pago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('ServiceHistory'); toggleMenu(); }}>
            <Text style={styles.menuItemText}>Historial de servicios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('TermsConditions'); toggleMenu(); }}>
            <Text style={styles.menuItemText}>Términos y Condiciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Help'); toggleMenu(); }}>
            <Text style={styles.menuItemText}>Ayuda</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.menuItem, styles.logoutButton]} 
            onPress={() => { navigation.navigate('Login'); toggleMenu(); }}
          >
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  menuText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,
    backgroundColor: '#fff',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#3E3E3E',
  },
  logoutButton: {
    backgroundColor: '#FF5252',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NavBar;