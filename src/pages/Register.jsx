'use strict';
import React, { useState } from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import { 
    MaterialIcons, 
    FontAwesome
} from '@expo/vector-icons';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { useNavigation } from '@react-navigation/core';

import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Layout from '../styles/layout';
import { auth } from '../config/firebase';

export function Register(){
    const navigation = useNavigation();
    const [emailIsFilled, setEmailIsFilled] = useState(false);
    const [passIsFilled, setPassIsFilled] = useState(false);
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisibleSuccess, setVisibleSuccess] = useState(false);
    const [isVisibleError, setVisibleError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    
    function toggleAlertSuccess(){
        setVisibleSuccess(!isVisibleSuccess);
    }

    function toggleAlertError(){
        setVisibleError(!isVisibleError);
    }

    function handleLogin() {
        navigation.navigate("Login");
    }

    const handleSingUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                toggleAlertSuccess();
            })
           /*  .cath(error => {
                toggleAlertError();
            }); */
    }

    function handlePassIsFilled(value) {
        if(value.length > 5){
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

    return( 
        <SafeAreaView style={Layout.container}>
            <FancyAlert
                visible={isVisibleSuccess}
                onRequestClose={toggleAlertSuccess}
                icon={
                    <View 
                        style={[
                            Layout.contentAlert,
                            Layout.bgSuccess
                        ]}>
                        <Text>🤓</Text>
                    </View>
                }
                style={Layout.bgWhite}
            >
                <Text style={{ marginTop: -16 }}>
                    Usuário Cadastrado.
                </Text>
                <TouchableOpacity 
                    style={[
                        Layout.btnAlert,
                        Layout.bgSuccess
                    ]} 
                    activeOpacity={0.8}
                    onPress={handleLogin}>
                    <Text style={Layout.white}>OK</Text>
                </TouchableOpacity>
            </FancyAlert>
            <FancyAlert
                visible={isVisibleError}
                onRequestClose={toggleAlertError}
                icon={
                    <View 
                        style={[
                            Layout.contentAlert,
                            Layout.bgDanger
                        ]}>
                        <Text>😢</Text>
                    </View>
                }
                style={Layout.bgWhite}
            >
                <Text style={{ marginTop: -16, marginBottom: 32 }}>
                    Usuário não pode ser cadastrado.
                </Text>
                <TouchableOpacity 
                    style={[
                        Layout.btnAlert,
                        Layout.bgDanger
                    ]} 
                    activeOpacity={0.8}
                    onPress={toggleAlertSuccess}>
                    <Text style={Layout.white}>OK</Text>
                </TouchableOpacity>
            </FancyAlert>
            <View style={styles.content}>
                <Text  
                    style={[
                        Typography.h1, 
                        Layout.black
                    ]}
                >
                    Cadastre-se
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
                        placeholder='Digite um email ...'
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
                        placeholder='Digite uma senha ...'
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
                        onPress={handleSingUp}
                    >
                        <Text 
                            style={[
                                Layout.textCenter,
                                Layout.secondaryLight80
                            ]}
                        >
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
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
        width: '100%',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
    },
})