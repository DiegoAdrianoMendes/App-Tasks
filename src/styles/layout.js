'use strict';
import { StyleSheet } from "react-native";
import Colors from "./colors";

const Layout = StyleSheet.create({
    container: {
        flex: 1,
    },
    textCenter:{
        textAlign: 'center',
    },
    secondaryLight80: {
        color: Colors.secondaryLight80,
    },
    black:{
        color: Colors.black,   
    },
    white:{
        color: Colors.white,   
    },
    bgSuccess:{
        backgroundColor: Colors.success,
    },
    bgSuccessLight:{
        backgroundColor: Colors.successLight
    },
    bgWhite:{
        backgroundColor: Colors.white,
    },
    bgDanger:{
        backgroundColor: Colors.danger,
    },
    bgPrimary:{
        backgroundColor: Colors.primary,
    },
    bgPrimaryLight: {
        backgroundColor: Colors.primaryLight,
    }, 
    bgWarning: {
        backgroundColor: Colors.warning,
    },
    contentAlert: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: '100%',
    },
    btnAlert: {
        borderRadius: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignSelf: 'stretch',
        marginTop: 16,
        minWidth: '48%',
        paddingHorizontal: 16,
        marginBottom: 10
    },
    button: {
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginTop: 20,
        marginBottom: 10
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskContent: {
        height: '85%',
        width: '100%',
    },
    taskCountWrapper: {
        backgroundColor: Colors.secondaryLight,
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    taskFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        color: Colors.black,
    },
    taskItems: {
        marginVertical: 20
    },
    buttonAddTask: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        marginRight: 15
    },
    menuTaskIcon: {
        color: Colors.dark,
        marginRight: 10
    },
    taskLineColum: {
        backgroundColor: Colors.black, 
        height: '100%', 
        width: 2,
        marginHorizontal: 5,
        borderRadius: 10
    }
});

export default Layout;