import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { AddTask } from "../pages/AddTask";
import { AllTasks } from "../pages/AllTasks";
import { Register } from "../pages/Register";
import { TodayTasks } from "../pages/TodayTasks";
import { MonthTasks } from "../pages/MonthTasks";
import { TomorrowTasks } from "../pages/TomorrowTasks";

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
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            name="TodayTasks"
            component={TodayTasks}
        />

        <stackRoutes.Screen
            name="TomorrowTasks"
            component={TomorrowTasks}
        />

        <stackRoutes.Screen
            name="WeekTasks"
            component={TodayTasks}
        />

        <stackRoutes.Screen
            name="MonthTasks"
            component={MonthTasks}
        />

        <stackRoutes.Screen
            name="AllTasks"
            component={AllTasks}
        />

        <stackRoutes.Screen
            name="AddTask"
            component={AddTask}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;