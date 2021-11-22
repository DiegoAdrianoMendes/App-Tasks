import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import DoubleClick from '../components/DoubleClick';
import Colors from '../styles/colors';
import Typography from '../styles/typography';

const Task = (props) => {
    const [check, setCheck] = useState(false);
    const [notCheck, setNotCheck] = useState(false);
  
    function handleDefaultTask(){
        setCheck(false);
        setNotCheck(false);
    }

    function handleCheckTask(){
        setNotCheck(true);
        setCheck(false);
    }

    function handleNotTask(){
        setCheck(true);
        setNotCheck(false);
    }

    return (
        <DoubleClick
            singleTap={handleNotTask}
            doubleTap={handleCheckTask}
            onLongPress={handleDefaultTask}
            delay={200}
        >
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
                        (check) ? styles.active : (notCheck)? styles.notCheck : styles.defaultCircle
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
        backgroundColor: Colors.white,
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
        borderColor: Colors.primary
    },
    active: {
        backgroundColor: Colors.success,
        borderColor: Colors.success,
        opacity: 1
    },
    notCheck: {
        backgroundColor: Colors.danger,
        borderColor: Colors.danger,
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
    defaultSquare: {
        backgroundColor: Colors.gray
    },
    itemText:{
        maxWidth: '80%',
    }
})

export default Task;