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
import Colors from '../styles/colors';
import Layout from '../styles/layout';

export function Home(){
    const navigation = useNavigation();
    
    function handleAddTask() {
        navigation.navigate("AddTask",{
            screen: 'Home'
        });
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
            <View style={styles.tasksWrapper}>
                <TouchableOpacity 
                    style={styles.container}
                    activeOpacity={0.8}
                    onPress={handleAddTask}
                >
                    <Text style={styles.text}>
                        Adicionar Tasks
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.container}
                    activeOpacity={0.8}
                    onPress={handleTodayTasks}
                >
                    <Text style={styles.text}>
                        Tarefas Hoje
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tasksContent: {
        height: '85%',
        width: '100%',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: Colors.headings
    },
    tasksItems: {
        marginVertical: 20
    },
    buttonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        marginRight: 15
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        color: Colors.dark,
        marginRight: 10
    },
    container: {
        backgroundColor: Colors.gray_light,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        color: Colors.white,
    }
})