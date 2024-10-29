import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos los íconos
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window'); 

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
        <Icon name="menu-outline" size={30} color="#3E3E3E" />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.menuContainer,
          { transform: [{ translateY }] },
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('UserInfo');
              toggleMenu();
            }}
          >
            <Icon name="person-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.menuItemText}>Mi cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('PaymentMethods');
              toggleMenu();
            }}
          >
            <Icon name="card-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.menuItemText}>Métodos de pago</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('ServiceHistory');
              toggleMenu();
            }}
          >
            <Icon name="list-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.menuItemText}>Historial de servicios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('TermsConditions');
              toggleMenu();
            }}
          >
            <Icon name="document-text-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.menuItemText}>Términos y Condiciones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('Help');
              toggleMenu();
            }}
          >
            <Icon name="help-circle-outline" size={24} color="#3E3E3E" style={styles.icon} />
            <Text style={styles.menuItemText}>Ayuda</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.logoutButton]}
            onPress={() => {
              navigation.navigate('Login');
              toggleMenu();
            }}
          >
            <Icon name="log-out-outline" size={24} color="#fff" style={styles.icon} />
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
    marginTop: 40,
    marginLeft: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  menuContainer: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    height: height - 100,
    backgroundColor: '#fff',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  scrollContainer: {
    paddingTop: 70,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  icon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 18,
    color: '#3E3E3E',
  },
  logoutButton: {
    backgroundColor: '#FF5252',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default NavBar;
