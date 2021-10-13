import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AddTasks } from "../pages/AddTasks";

import Colors from "../styles/colors";

const stackRoutes = createNativeStackNavigator();

const AppRoutes = React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            contentStyle: {
                backgroundColor: Colors.white
            },
            headerShown: false
        }}
    >
        <stackRoutes.Screen
            name="Login"
            component={Login}
        />
        
        <stackRoutes.Screen
            name="Register"
            component={Register}
        />

        <stackRoutes.Screen
            name="AddTasks"
            component={AddTasks}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;