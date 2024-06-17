import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/Instagram-Logo.png";
import { styles } from "./stylesLogin";
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from "expo-router";
import Home from "../Home";

export default function Login() {
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
    <Link href={'/Home'}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>
    </Link>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Continue com o Facebook</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={styles.textOu}> OU </Text>
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
