import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../src/assets/images/Instagram-Logo.png";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

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

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Continue com o Facebook</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={styles.textOu} >OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity style={styles.signUpButton}>
          <Text>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
