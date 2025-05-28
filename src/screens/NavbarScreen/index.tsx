// NavbarScreen.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  ScrollView,
  Image,
} from 'react-native';

import {IC_CROSS, IC_MENU, IC_SEARCH} from '../../libs/ImageSources';

const NavbarScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Commerce',
    'Templates',
    'Enterprise',
  ];

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Text style={styles.logo}>AEON</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <Image source={IC_SEARCH} style={styles.iconStyle} />
          <TouchableOpacity onPress={toggleMenu} style={styles.imageStyle}>
            <Image
              source={isMenuOpen ? IC_CROSS : IC_MENU}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input (no functionality) */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ScrollView contentContainerStyle={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default NavbarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  imageStyle: {
    marginLeft: 20,
  },
});
