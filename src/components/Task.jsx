import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { 
    FontAwesome
} from '@expo/vector-icons';
import Colors from '../styles/colors';
import Typography from '../styles/typography';

const Task = (props) => {
    let check = false;
    let notCheck = false;

    if(props.state == 'check'){
        check = true;
    }else if(props.state == 'notCheck'){
        notCheck = true;
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View 
                    style={[
                        styles.square,
                        (check) ? styles.active : (notCheck)? styles.notCheck : styles.defaultSquare,
                        (check) ? styles.iconCheck: (notCheck)? styles.iconNotCheck : styles.defaultSquare,
                    ]}
                >
                    <FontAwesome 
                        name={(check)? "check" : (notCheck)? "close": ""} 
                        size={24} 
                        color={Colors.white} 
                    />
                </View>
                <Text style={[
                    styles.itemText,
                    Typography.h3
                ]}>
                    {props.title}
                </Text>
            </View>
            <View 
                style={[
                    styles.circle,
                    (check) ? styles.active : (notCheck)? styles.notCheck : styles.defaultCircle
                ]}
            >
            </View>
        </View>
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
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        opacity: 1
    },
    notCheck: {
        backgroundColor: Colors.red,
        borderColor: Colors.red,
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
        backgroundColor: Colors.primary
    },
    itemText:{
        maxWidth: '80%',
    }
})

export default Task;