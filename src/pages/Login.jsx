'use strict'
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { 
    MaterialIcons, 
    FontAwesome
} from '@expo/vector-icons';

import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Layout from '../styles/layout';
import { auth } from '../config/firebase';

export function Login(){
    const navigation = useNavigation();
    const [emailIsFilled, setEmailIsFilled] = useState(false);
    const [passIsFilled, setPassIsFilled] = useState(false);
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i

    const handleLogin = () => {
        auth
            .singInWithEmailAndPassword(email, password)
             .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with: ", user);
            })
            .cath(error => alert(error.message));
    }

    function handlePassIsFilled(value) {
        if(value.length > 4){
            setPassIsFilled(true);
            setPassword(value)
        }else{
            setPassIsFilled(false);
        }
    }

    function handleEmailIsFilled(value) {
        if(emailRegex.test(value)){ 
            setEmailIsFilled(true);
            setEmail(value);
        }else{
            setEmailIsFilled(false);
        } 
    }

    function handleHiddenPassword(){
        (hiddenPassword)? setHiddenPassword(false): setHiddenPassword(true);
    }

    function handlerLogin(){
        navigation.navigate("Home");
    }

    function handlerRegister(){
        navigation.navigate("Register");
    }

    return( 
        <SafeAreaView style={Layout.container}>
            <View style={styles.content}>
                <Text  
                    style={[
                        Typography.h1, 
                        styles.tittle
                    ]}
                >
                    Entrar
                </Text>
                <View style={styles.card}>
                    <Text 
                        style={[
                            Typography.text,
                            styles.tittle
                        ]}
                    >
                        Informe seus dados
                    </Text>
                    <Input
                        placeholder='Digite seu email ...'
                        leftIcon={
                            <MaterialIcons 
                                name="email"
                                size={24}
                                color={Colors.gray}
                            />
                        }
                        onChangeText={handleEmailIsFilled}
                    />
                    <Input
                        secureTextEntry={
                            (hiddenPassword)? true : false
                        }
                        placeholder='Digite seu senha ...'
                        leftIcon={
                            <FontAwesome 
                                name="lock" 
                                size={24} 
                                color={Colors.gray}
                            />
                        }
                        rightIcon={
                            <FontAwesome 
                                name="eye-slash"
                                size={24} 
                                color={Colors.gray}
                                onPress={handleHiddenPassword}
                            />
                        }
                        onChangeText={handlePassIsFilled}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={[
                            styles.button,
                            (emailIsFilled && passIsFilled) && { backgroundColor: Colors.green }
                        ]}
                        disabled={!passIsFilled || !emailIsFilled}
                        onPress={handlerLogin}
                    >
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handlerRegister}
                >
                    <Text style={styles.textButton}>
                        Ainda não possui conta ?
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    card: {
        backgroundColor: Colors.secondary,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20,
    },
    tittle:{
        color: Colors.headings,
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.gray_dark,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    textButton: {
        textAlign: 'center',
        color: Colors.dark
    },
})