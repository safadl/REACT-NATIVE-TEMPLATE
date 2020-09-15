import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, View} from 'react-native'
import {Icon} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

function Home(){
    return(
        <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
        <Text>Home screen</Text>
        </View>
    )
}
function Details(){
    return(
        <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
        <Text>Details screen</Text>
        </View>
    )
}
function BottomNavigator(){
return(
<Tab.Navigator>
    <Tab.Screen tabBarIcon={()=>(<MaterialCommunityIcons name="home" color='tomato' size={10} />
)}
 name="Home" component={Home} />
    <Tab.Screen tabBarIcon={()=>(<MaterialCommunityIcons name="list" color='tomato' size={10} />)} name="Details" component={Details} />

</Tab.Navigator>
)
}

export default BottomNavigator;