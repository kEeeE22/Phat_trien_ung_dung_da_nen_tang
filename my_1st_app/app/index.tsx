import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity} from "react-native";
import React from 'react'

export default function Index() {
  const [email, setEmail] = React.useState('')
  const [password, setPasswordsetPassword] = React.useState('')
  return (
    <View style={styles.container}>
    <View style={{alignItems: 'center'}}>
    <Image
      source={require('../assets/images/react-logo.png')}
      style={styles.image_a}
    />
    </View>
    
    <Text style={styles.welcomeBack}>Welcome back.</Text>
    
    <TextInput
        style={styles.inputText}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text=> setEmail(text)}
        value={email}
    />
    
    <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text=>setPasswordsetPassword(text)}
        value={password}
    />
    <Text style={styles.forgotpassword}>Forgot your password?</Text>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
      <Text style={styles.noAccount}>Don't have a account? <Text style={styles.link}>Sign up</Text></Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  image_a: {
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  welcomeBack: {
    textAlign: 'center',
    color: '#560cce',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
  },
  forgotpassword: {
    textAlign: 'right',
    fontSize: 16,
    marginTop: 10,
  },
  link: {
    color: '#560cce'
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    lineHeight: 40,
    marginTop: 15,
    fontSize: 20,
    padding: 16
  },
  noAccount: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  button: {
    height: 60,
    backgroundColor: '#560cce',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});