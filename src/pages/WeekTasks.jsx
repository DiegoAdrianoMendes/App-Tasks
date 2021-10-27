'use strict';
import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { 
    FontAwesome
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import Colors from '../styles/colors';
import Layout from '../styles/layout';
import Typography from '../styles/typography';
import Task from '../components/Task';

export function WeekTasks(){
    const navigation = useNavigation();
    
    function handleAddTask() {
        navigation.navigate("AddTask");
    }

    return( 
        <SafeAreaView style={Layout.container}>
            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                    >
                        <FontAwesome 
                            name="list" 
                            size={24} 
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                    <Text style={[
                        styles.title,
                        Typography.h2
                    ]}>
                        Tarefas para está Semana.
                    </Text>
                </View>
                <View style={styles.tasksContent}>
                    <ScrollView>
                        <View style={styles.tasksItems}>
                            <Task title='Tarefa Semana 01'/>
                            <Task title='Tarefa Semana 02'/>
                            <Task title='Tarefa Semana 03'/>
                            <Task title='Tarefa Semana 04'/>
                            <Task title='Tarefa Semana 05'/>
                            <Task title='Tarefa Semana 06'/>
                            <Task title='Tarefa Semana 07'/>
                            <Task title='Tarefa Semana 08'/>
                            <Task title='Tarefa Semana 09'/>
                            <Task title='Tarefa Semana 10'/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={styles.buttonAdd}
                        activeOpacity={0.5}
                        onPress={handleAddTask}
                    >
                        <FontAwesome 
                            name="plus" 
                            size={24} 
                            color="white" 
                        />
                    </TouchableOpacity>
                </View>
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
    }
})