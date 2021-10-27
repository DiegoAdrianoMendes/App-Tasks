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
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Layout from '../styles/layout';

export function Register(){
    
    const [emailIsFilled, setEmailIsFilled] = useState(false);
    const [passIsFilled, setPassIsFilled] = useState(false);
    const [hiddenPassword, setHiddenPassword] = useState(true);
    
    function handlePassIsFilled(value) {
        (value.length > 0)? setPassIsFilled(true) : setPassIsFilled(false);
    }

    function handleEmailIsFilled(value) {
        (value.length > 0)? setEmailIsFilled(true) : setEmailIsFilled(false);
    }

   
    function handleHiddenPassword(){
        (hiddenPassword)? setHiddenPassword(false): setHiddenPassword(true);
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
                    Cadastre-se
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
                        placeholder='Digite um email ...'
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
                        placeholder='Digite uma senha ...'
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
                    >
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );r
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
        color: Colors.white
    },
})