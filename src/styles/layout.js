'use strict';
import { StyleSheet } from "react-native";
import colors from "./colors";

const Layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.body
    },
    textCenter:{
        textAlign: 'center'
    }
});

export default Layout;