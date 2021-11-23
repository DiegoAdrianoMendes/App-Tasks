import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import DoubleClick from '../components/DoubleClick';
import Colors from '../styles/colors';
import Layout from '../styles/layout';
import Typography from '../styles/typography';

const Task = (props) => {
    const [check, setCheck] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    function handleDefaultTask(){
        setCheck(false);
    }

    function handleCheckTask(){
        setCheck(true);
    }

    function handleDeleteTask(){
        console.log('Delete Task');
        handleModal();
    }

    function handleModal() {
        setIsVisibleModal(!isVisibleModal);
    }

    return (
        <DoubleClick
            singleTap={handleCheckTask}
            doubleTap={handleDefaultTask}
            onLongPress={handleModal}
            delay={200}
        >
            <FancyAlert
                visible={isVisibleModal}
                onRequestClose={handleModal}
                icon={
                    <View 
                        style={[
                            Layout.contentAlert,
                            Layout.bgWarning
                        ]}>
                        <Text>‼️</Text>
                    </View>
                }
                style={Layout.bgWhite}
            >
                <Text style={{ marginTop: -16 }}>
                    Deseja excluir a tarefa ?
                </Text>
                <View style={{display: 'flex', flexDirection:'row'}}>
                    <TouchableOpacity 
                        style={[
                            Layout.btnAlert,
                            Layout.bgSuccess,
                            {marginRight: 10}
                        ]} 
                        activeOpacity={0.8}
                        onPress={handleDeleteTask}>
                        <Text style={[Layout.white]}>OK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[
                            Layout.btnAlert,
                            Layout.bgDanger
                        ]} 
                        activeOpacity={0.8}
                        onPress={handleModal}>
                        <Text style={Layout.white}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </FancyAlert>
            <View style={styles.item}>
                <Text style={[
                    styles.itemText,
                    Typography.h3
                ]}>
                    {props.title}
                </Text>
                <View 
                    style={[
                        styles.circle,
                        (check) ? styles.active : styles.defaultCircle
                    ]}
                >
                </View>
            </View>
        </DoubleClick>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.secondaryLight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2
    },
    defaultCircle: {
        backgroundColor: Colors.white,
        borderColor: Colors.secondaryDark
    },
    active: {
        backgroundColor: Colors.success,
        borderColor: Colors.success,
        opacity: 1
    },
    square: {
        width: 30,
        height: 30,
        borderRadius: 5,
        opacity: 0.8,
        marginRight: 10
    },
    iconCheck: {
        paddingLeft: 3,
        paddingTop: 2
    },
    iconNotCheck: {
        paddingLeft: 5,
        paddingTop: 2
    },
    itemText:{
        maxWidth: '80%',
    }
})

export default Task;