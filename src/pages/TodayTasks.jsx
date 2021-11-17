'use strict';
import React, { useState } from 'react';
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

export function TodayTasks(){
    const navigation = useNavigation();
    const [countCheck, setCountCheck] = useState(1);
    const [countNotCheck, setCountNotCheck] = useState(2);

    function handleAddTask() {
        navigation.navigate("AddTask",{
            screen: 'TodayTasks'
        });
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
                        Tarefas para hoje.
                    </Text>
                </View>
                <View style={styles.tasksContent}>
                    <View style={styles.wrapperCount}>
                        <View style={styles.viewCount}>
                            <Text 
                                style={[
                                    Layout.textCenter, 
                                    Typography.h2
                                ]}
                            >
                                {countCheck}
                            </Text>
                            <Text style={Typography.h3}>Concluidas</Text>
                        </View>
                        <View style={styles.lineColum}>
                        </View>
                        <View style={styles.viewCount}>
                            <Text 
                                style={[
                                    Layout.textCenter, 
                                    Typography.h2
                                ]}
                            >
                                {countNotCheck}
                            </Text>
                            <Text style={Typography.h3}>Pendentes</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.tasksItems}>
                            <Task title='Tarefa 01'/>
                            <Task title='Tarefa 02'/>
                            <Task title='Tarefa 03'/>
                            <Task title='Tarefa 04'/>
                            <Task title='Tarefa 02'/>
                            <Task title='Tarefa 03'/>
                            <Task title='Tarefa 04'/>
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
                            color={Colors.white} 
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        color: Colors.dark,
        marginRight: 10
    },
    wrapperCount: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    lineColum: {
        backgroundColor: Colors.black, 
        height: '100%', 
        width: 2,
        marginHorizontal: 5,
        borderRadius: 10
    }
})