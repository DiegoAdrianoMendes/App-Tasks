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
        minWidth: '100%',
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
});

export default Layout;