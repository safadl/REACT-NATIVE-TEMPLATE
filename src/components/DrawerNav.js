import React, { Component } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator}  from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native'
import Buttons from './Buttons'
import Lists from './Lists'
import Modals from './Modals';
import StackNavigator from '../navigation/StackNavigator'
import Pressables from './Pressable'
import Switches from './Switches';
import Inputs from './inputs'
import Cards from './Cards'
import BottomNavigator from '../navigation/BottomNavigator'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
function MyButtons({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{title: "Buttons",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Buttons" component={Buttons}  />
      <Stack.Screen options={{title: "Lists",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Lists" component={Lists}  />

    </Stack.Navigator>
    
  );
} 
function MyLists({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{title: "Lists",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Lists" component={Lists}  />

    </Stack.Navigator>
    
  );
} 
function MyModals({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{title: "Modal",headerBackTitle:'Go back',headerTitleStyle:{marginLeft:Dimensions.get('window').width/4}, headerLeft:()=><Icon onPress={()=>navigation.toggleDrawer()}name="menu" size={30}/>}}  name="Modals" component={Modals}  />

    </Stack.Navigator>
    
  );
} 
function DrawerNav () {
        return (
            <Drawer.Navigator options={{drawerIcon:config=><Icon name="menu"/>}}   >
                <Drawer.Screen name="Buttons" component={MyButtons}  />
                <Drawer.Screen name="Lists" component={MyLists}  />
                <Drawer.Screen name="Modals" component={MyModals}  />
                <Drawer.Screen name="Stack navigator" component={StackNavigator}  />
                <Drawer.Screen name="Pressables" component={Pressables}  />
                <Drawer.Screen name="Switches" component={Switches}  />
                <Drawer.Screen name="Inputs" component={Inputs}  />
                <Drawer.Screen name="Cards" component={Cards}  />
                <Drawer.Screen  name='Bottom Navigator' component={BottomNavigator}/>





            </Drawer.Navigator>
 
        );

}

export default DrawerNav;