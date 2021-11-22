'use strict';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { 
    SafeAreaView,
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Layout from '../styles/layout';

export function AddTask(){
    const navigation = useNavigation();
    const [taskIsFilled, setTaskIsFilled] = useState(false);
    const [nameTask, setNameTask] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());

    function showDatePicker(){
        setDatePickerVisibility(true);
    };

    function hideDatePicker(){
        setDatePickerVisibility(false);
    };

    function handleConfirm(date){
        setDate(date);
        hideDatePicker();
    };

    function handleTaskIsFilled(value) {
        (value.length > 2)? setTaskIsFilled(true) : setTaskIsFilled(false);
    }

    function handleBack(){
        navigation.goBack();
    }

    function handleAddTask(){
        console.log(nameTask, formatDateString(date));
    }

    function handleChangeTextTask(value){
        setNameTask(value);
        handleTaskIsFilled(value);
    }
    
    function formatDateString(date){
        let day = date.getDate();
        let mouth = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${mouth}/${year}`;
    }

    return(
        <SafeAreaView style={Layout.container}>
            <View style={Layout.container}>
                <View style={styles.navbar}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={handleBack}
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
                            Layout.white
                        ]}
                    >
                        Adicionar Tarefa
                    </Text>
                    <View></View>
                </View>
                <View style={styles.content}>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        date={date}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <TouchableOpacity 
                        style={[
                            Layout.button,
                            Layout.bgPrimaryLight
                        ]} 
                        onPress={showDatePicker}
                        activeOpacity={0.8}
                    >   
                        <Text style={Layout.textCenter}>Selecione a Data: {formatDateString(date)}</Text>
                    </TouchableOpacity>
                    <Input
                        placeholder='Nome da Tarefa'
                        leftIcon={
                            <FontAwesome5 
                                name="tasks"
                                size={24}
                                color={Colors.secondary}
                            />
                        }
                        value={nameTask}
                        onChangeText={handleChangeTextTask}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={[
                            Layout.button,
                            (taskIsFilled)? Layout.bgSuccess : Layout.bgSuccessLight
                        ]}
                        disabled={!taskIsFilled}
                        onPress={handleAddTask}
                    >
                        <Text 
                            style={[
                                Layout.secondaryLight80,
                                Layout.textCenter
                            ]}
                        >
                            Adicionar
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
    navbar: {
        backgroundColor: Colors.secondaryDark,
        height: 85,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop:30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
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