import React from 'react'
import { View, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>
}


const Lista = ({ navigation }: RouterProps)  => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Button onPress={() => navigation.navigate('detalles')} title="Abre los detalles"/>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Exit"/>
        
    </View>
  );
};

export default Lista;