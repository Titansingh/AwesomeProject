import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import HomeScreen from '../screens/homeScreen/homeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    ),
                    headerShown: false ,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                     headerShown: false ,
                }}
            />
            
        </BottomTab.Navigator>
    );
}
