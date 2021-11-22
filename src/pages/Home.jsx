'use strict';
import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Layout from '../styles/layout';
import { auth } from '../config/firebase';
import Typography from '../styles/typography';

const Button = (props) => {
    return(
        <TouchableOpacity 
            style={[
                Layout.button,  
                Layout.bgPrimary
            ]}
            activeOpacity={0.8}
            onPress={props.action}
        >
        <Text 
            style={[
                Layout.white,
                Layout.textCenter
            ]}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
    );
}

export function Home(){
    const navigation = useNavigation();
    const name = (auth.currentUser?.email).split('@')[0];

    const handleSingOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login");
            });
    }

    function handleAddTask() {
        navigation.navigate("AddTask");
    }

    function handleTodayTasks() {
        navigation.navigate("TodayTasks");
    }

    function handleTomorrowTasks() {
        navigation.navigate("TomorrowTasks");
    }

    function handleMonthTasks() {
        navigation.navigate("MonthTasks");
    }

    function handleWeekTasks() {
        navigation.navigate("WeekTasks");
    }

    function handleAllTasks() {
        navigation.navigate("AllTasks");
    }

    return( 
        <SafeAreaView style={Layout.container}>
            <View style={styles.wrapper}>
                <Text 
                    style={[
                        Typography.h2, 
                        Layout.textCenter
                    ]}
                >
                    Bem Vindo {name}
                </Text>
                <Button text="Adicionar Tarefa" action={handleAddTask}/>
                <Button text="Tarefas Diarias" action={handleTodayTasks}/>
              {/*  
                <Button text="Sair" action={}/>
                <Button text="Sair" action={}/>
                <Button text="Sair" action={}/>
                <Button text="Sair" action={}/>
                <Button text="Sair" action={}/> */}
                <Button text="Sair" action={handleSingOut}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
    }
})