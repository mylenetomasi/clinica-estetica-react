import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import Agendamento from "../Pages/Agendamento"
import Pacotes from "../Pages/Pacotes"
import Procedimentos from "../Pages/Procedimentos"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Agendamento"
            component={Agendamento}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="contact-phone" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
             <Tab.Screen 
            name="Pacotes"
            component={Pacotes}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="store" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
             <Tab.Screen 
            name="Procedimentos"
            component={Procedimentos}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="store" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
        </Tab.Navigator>
    )
}


export default function Routes(){
    return(
        <Stack.Navigator>
        
        <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
        />
        </Stack.Navigator>
    )
}