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
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password);
        /*.cath(error => alert(error.message));*/
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home");
            }
        });
    }

    function handlePassIsFilled(value) {
        if(value.length > 5){
            setPassIsFilled(true);
            setPassword(value);
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

    function handleRegister(){
        navigation.navigate("Register");
    }

    return( 
        <SafeAreaView style={Layout.container}>
            <View style={styles.wrapper}>
                <Text  
                    style={[
                        Typography.h1,
                        Layout.black,
                    ]}
                >
                    App Tasks 
                </Text>
                <View style={styles.card}>
                    <Text 
                        style={[
                            Typography.text,
                            Layout.black,
                            Layout.textCenter,
                            {marginBottom:20}
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
                                color={Colors.secondary}
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
                                color={Colors.secondary}
                            />
                        }
                        rightIcon={
                            <FontAwesome 
                                name="eye-slash"
                                size={24} 
                                color={Colors.secondary}
                                onPress={handleHiddenPassword}
                            />
                        }
                        onChangeText={handlePassIsFilled}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={[
                            Layout.button,
                            (emailIsFilled && passIsFilled)? Layout.bgPrimary : Layout.bgPrimaryLight
                        ]}
                        disabled={!passIsFilled || !emailIsFilled}
                        onPress={handleLogin}
                    >
                        <Text 
                            style={[
                                Layout.textCenter,
                                Layout.secondaryLight80
                            ]}
                        >
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleRegister}
                >
                    <Text style={Layout.black}>
                        Ainda não possui conta cadastre-se?
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    card: {
        width: '100%',
        padding: 10,
        marginTop: 40,
        marginBottom: 20,
    }
});