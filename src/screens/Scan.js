import React, { Component } from 'react';
 import {Text,Image,View, Dimensions,ScrollView} from 'react-native'

function Scan(){
return(
    <ScrollView  style={{borderRadius:20, backgroundColor:'white'}}>
    <View style={{justifyContent:'center',alignItems:'center',paddingTop:80}}>
    <Image  style={{width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.1}} source={require('../assets/images/transurb.png')} />
    </View>
    <Text style={{alignSelf:'center',fontFamily:'Helvetica Neue', color:'#168F62',fontSize:25, paddingTop:100}}>Analyse d'abonnement</Text>
    <Text style={{alignSelf:'center',fontFamily:'Helvetica Neue', color:'#168F62',fontSize:18}}>Placez le code QR à l’intérieur de la zone</Text>

    </ScrollView>
)
}
export default Scan;