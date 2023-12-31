import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;


    const iniciarSesion = async () =>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any){
            console.log(error);
            alert('Ha fallado '+ error.message);
        } finally {
            setLoading(false);
        }
    }

    const registro = async () =>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Ha ocurrido un error con tu email!')
        } catch (error: any){
            console.log(error);
            alert('Ha fallado '+ error.message);
        } finally {
            setLoading(false);
        }
    }


  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>

      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none'
      onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none'
      onChangeText={(text) => setPassword(text)}></TextInput>

    
        { loading ? (
            <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <>
            <Button title='Login' onPress={iniciarSesion} />
            
            <Button title='Create una cuenta!' onPress={registro} />
            </>
        )
        
    }
    </KeyboardAvoidingView>
    </View>
  )
};

export default Login;

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});