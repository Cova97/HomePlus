import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleUserInfoPress = () => {
    closeMenu();
    navigation.navigate('UserInfo');
  };

  const handlePaymentMethodsPress = () => {
    closeMenu();
    navigation.navigate('PaymentMethods');
  };

  const handleLogoutPress = () => {
    closeMenu();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <View style={styles.menuIcon}>
            <Ionicons name="menu" size={24} color="#3E3E3E" onPress={openMenu} />
          </View>
        }
      >
        <MenuItem onPress={handleUserInfoPress}>Información del Usuario</MenuItem>
        <MenuDivider />
        <MenuItem onPress={handlePaymentMethodsPress}>Métodos de Pago</MenuItem>
        <MenuDivider />
        <MenuItem onPress={handleLogoutPress}>Salir</MenuItem>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  menuIcon: {
    padding: 10,
  },
});

export default NavBar;