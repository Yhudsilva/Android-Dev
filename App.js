import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Organicos from './src/pages/Organicos';
import Importancia from './src/pages/Importancia';
import Vantagens from './src/pages/Vantagens';
import { Header } from 'react-native/Libraries/NewAppScreen';

const stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <stack.Navigator initialRouteName='Login'>

    <stack.Screen 
    name='Login' 
    component={Login} 
    options={{headerShown:false}}/>

    <stack.Screen
      name='Home'
      component={Home}
      options={{headerShown:false}}
    />

    <stack.Screen
    name='Organicos'
    component={Organicos}
    options={{title:''}}
    />

    <stack.Screen
    name='Vantagens'
    component={Vantagens}
    options={{title:''}}
    />

<stack.Screen
    name='Importancia'
    component={Importancia}
    options={{title:''}}
    />

    

   
    </stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigate></StackNavigate>
    </NavigationContainer>
  )
}
