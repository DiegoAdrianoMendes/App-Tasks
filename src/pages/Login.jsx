import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Typography from '../styles/typography';

export function Login(){
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
                            <FontAwesome
                                name="user"
                            />    
                        } 
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Digite sua Senha ...'
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.button}
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
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    card: {
        backgroundColor: 'red',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20,
    },
    tittle:{
        color: 'blue',      //colors.heading,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    textButton: {
        textAlign: 'center'
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