import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
} from 'react-native';

export function Login(){
    return( 
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.tittle}>
                    Entrar
                </Text>
                <View>
                    <Text>
                        Informe seus Dados
                    </Text>
                    <TextInput 
                        
                    />
                    <TextInput />
                </View>
                <Text>
                    Ainda não possui conta?
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tittle:{

    }
})