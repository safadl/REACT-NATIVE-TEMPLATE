import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import DrawerNavigator from './DrawerNavigator';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import Scan from '../screens/Scan';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';

const stack=createStackNavigator();
function GlobalStack(){
    return(
        <stack.Navigator screenOptions={{
            headerTintColor: 'white',
          
          }}>
            <stack.Screen options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>{console.log('hi')}} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                    onPress={() => {
                     // Do something
                    }}
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />}} name="John Doe" component={Scan}/>
         
        </stack.Navigator>
    )
}
function MainNavigator(){
return( <>
    {/* <NavigationContainer>

        <DrawerNavigator/>
    </NavigationContainer> */}
    <NavigationContainer>
          <GlobalStack />
    </NavigationContainer>
    </>
)
}
export default MainNavigator