import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash/Splash';
import { Login } from '../screens/Login/Login';


type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}