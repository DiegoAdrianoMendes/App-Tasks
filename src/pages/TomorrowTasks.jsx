'use strict';
import React, { useState } from 'react';
import { 
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

export function TomorrowTasks(){
    const navigation = useNavigation();
    const [countCheck, setCountCheck] = useState(1);
    const [countNotCheck, setCountNotCheck] = useState(2);

    function handleAddTask() {
        navigation.navigate("AddTask");
    }

    return( 
        <SafeAreaView style={Layout.container}>
            <View style={Layout.taskWrapper}>
                <View style={Layout.taskHeader}>
                    <FontAwesome 
                        name="list" 
                        size={24} 
                        style={Layout.menuTaskIcon}
                    />
                    <Text style={[
                        Layout.title,
                        Typography.h2
                    ]}>
                        Tarefas de ontem.
                    </Text>
                </View>
                <View style={Layout.taskContent}>
                    <View style={Layout.taskCountWrapper}>
                        <View>
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
                        <View style={Layout.taskLineColum}>
                        </View>
                        <View>
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
                        <View style={Layout.taskItems}>
                            <Task title='Tarefa 11'/>
                            <Task title='Tarefa 12'/>
                            <Task title='Tarefa 13'/>
                            <Task title='Tarefa 14'/>
                            <Task title='Tarefa 15'/>
                            <Task title='Tarefa 16'/>
                            <Task title='Tarefa 17'/>
                            <Task title='Tarefa 18'/>
                            <Task title='Tarefa 19'/>
                            <Task title='Tarefa 20'/>
                        </View>
                    </ScrollView>
                </View>
                <View style={Layout.taskFooter}>
                    <TouchableOpacity 
                        style={Layout.buttonAddTask}
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