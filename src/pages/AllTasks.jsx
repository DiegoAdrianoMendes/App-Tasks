'use strict';
import React from 'react';
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

export function AllTasks(){
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
                        Tarefas para hoje.
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
                            <Task title='Tarefa 41'/>
                            <Task title='Tarefa 42'/>
                            <Task title='Tarefa 43'/>
                            <Task title='Tarefa 44'/>
                            <Task title='Tarefa 45'/>
                            <Task title='Tarefa 46'/>
                            <Task title='Tarefa 47'/>
                            <Task title='Tarefa 48'/>
                            <Task title='Tarefa 49'/>
                            <Task title='Tarefa 50'/>
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