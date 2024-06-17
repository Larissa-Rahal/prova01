import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { styles } from './styleMenu'

const InstagramMenu = () => {
  return (
    <View style={styles.Footer}>
      <Foundation name="home" size={24} color="black" />
      <Feather name="search" size={24} color="black" />
      <Feather name="plus-square" size={24} color="black" />
      <Feather name="heart" size={24} color="#000" />
      <FontAwesome5 name="user-circle" size={24} color="black" />
    </View>
  );
};

export default InstagramMenu;
