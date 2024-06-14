import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../src/assets/images/Instagram-Logo.png";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar 
        backgroundColor="#FFF" 
        translucent={false} 
      />
      
      <Image 
        style={styles.logo} 
        source={Logo} 
      />

      <TextInput 
        placeholder="Celular, username ou email" 
        style={styles.input} 
      />

      <TextInput 
        placeholder="Digite sua senha" 
        style={styles.input} 
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );
}
