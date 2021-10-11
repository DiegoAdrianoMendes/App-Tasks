import React, { useState } from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Input } from 'react-native-elements';
import { 
    MaterialIcons, 
    FontAwesome
} from '@expo/vector-icons';
import Typography from '../styles/typography';
import Colors from '../styles/colors';

export function Login(){
    
    const [emailIsFilled, setEmailIsFilled] = useState(false);
    const [passIsFilled, setPassIsFilled] = useState(false);
    
    function handlePassIsFilled(value) {
        (value.length > 0)? setPassIsFilled(true) : setPassIsFilled(false);
    }

    function handleEmailIsFilled(value) {
        (value.length > 0)? setEmailIsFilled(true) : setEmailIsFilled(false);
    }

    function hiddenPassword(){
        console.log('oi')
    }

    return( 
        <SafeAreaView style={styles.container}>
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
                                color="blue"
                            />
                        }
                        onChangeText={handleEmailIsFilled}
                    />
                    <Input
                        placeholder='Digite seu senha ...'
                        leftIcon={
                            <FontAwesome 
                                name="lock" 
                                size={24} 
                                color="blue"
                            />
                        }
                        rightIcon={
                            <Text>
                                E
                            </Text>
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
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    Ainda não possui conta ?
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.body
    },
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
        backgroundColor: 'red',
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
    input: {
        borderColor: 'gray',
        color: 'blue',
        width: '100%',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'yellow'
    },
})