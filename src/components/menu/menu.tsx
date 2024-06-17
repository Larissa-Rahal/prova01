import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { styles } from './styleMenu'

const InstagramMenu = () => {
  return (
    <View style={styles.Footer}>
      <TouchableOpacity>
        <Foundation name="home" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
      <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Feather name="plus-square" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Feather name="heart" size={24} color="#000" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <FontAwesome5 name="user-circle" size={24} color="black" />
      </TouchableOpacity>
    
    </View>
  );
};

export default InstagramMenu;
