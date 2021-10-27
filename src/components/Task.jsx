import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Colors from '../styles/colors';
import Typography from '../styles/typography';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}>

                </TouchableOpacity>
                <Text style={[
                    styles.itemText,
                    Typography.h3
                ]}>
                    {props.title}
                </Text>
            </View>
            <View style={styles.circle}></View>
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
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: 2,
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        opacity: 0.5,
        marginRight: 10,
    },
    itemText:{
        maxWidth: '80%',
    }
})

export default Task;