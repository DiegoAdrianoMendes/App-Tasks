import React, { useState } from 'react';
import { 
    SafeAreaView,
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Typography from '../styles/typography';
import Colors from '../styles/colors';

export function AddTasks(){
    const [taskIsFilled, setTaskIsFilled] = useState(false);

    function handleTaskIsFilled(value) {
        (value.length > 0)? setTaskIsFilled(true) : setTaskIsFilled(false);
    }

    return( 
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    >
                        <FontAwesome5
                            name='arrow-left'
                            size={24}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                    <Text 
                        style={[
                            Typography.text,
                            styles.title
                        ]}
                    >
                        Adicionar Task
                    </Text>
                    <View></View>
                </View>
                <View style={styles.content}>
                    <Input
                        placeholder='Nome da Tarefa'
                        leftIcon={
                            <FontAwesome5 
                                name="tasks"
                                size={24}
                                color={Colors.gray}
                            />
                        }
                        onChangeText={handleTaskIsFilled}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={[
                            styles.button,
                            (taskIsFilled) && { backgroundColor: Colors.green }
                        ]}
                        disabled={!taskIsFilled}
                    >
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: Colors.body
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    navbar: {
        backgroundColor: Colors.gray_dark,
        height: 85,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop:30,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5
    },
    title:{
        color: Colors.white
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
});