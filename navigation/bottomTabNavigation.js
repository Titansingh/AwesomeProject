import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/homeScreen/homeScreen';
import TodoUi from '../screens/todoUi/todoUi';
import PasswordScreen from '../screens/passwordScreen/passwordScreen';
import BookScreen from '../screens/bookScreen//bookScreen'

const BottomTab = createBottomTabNavigator();

export default function bottomTabNavigator () {
    return (
        <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="TodoUi" component={TodoUi} />
        <BottomTab.Screen name="Password" component={PasswordScreen} />
        <BottomTab.Screen name="BookScreen" component={BookScreen} />
        </BottomTab.Navigator>
    )
}