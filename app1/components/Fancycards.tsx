import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycards() {
  return (
    <View>
      <Text style = {styles.headingText}>Fancycards</Text>
      <View style = {[styles.card, styles.cardelevated]}>
        <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1702434428628-4c8a191c532a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style = {styles.cardimg}
        />
        <View style = {styles.cardbody}>
          <Text style = {styles.cardtitle}>BADSHAHI MOSQUE</Text>
          <Text style = {styles.cardlabel }>Badshahi mosque , lahore</Text>
          <Text style = {styles.carddescription}>Badshahi mosque Lorem ipsum dolor, amet consectetur adipisicin tenetur?</Text>
          <Text style = {styles.cardfooter}>80 km away..</Text>
         
        </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    headingText : {
       fontSize: 24,
       fontWeight: 'bold',
       color: 'white',  
    },
    card : {
      height: 400,
      width: 360,
      marginVertical : 12,
      marginHorizontal : 30,
      borderRadius : 8
    },
    cardelevated : {
      backgroundColor: 'white',
      elevation : 30,
      shadowOffset : {
        width: 1,
        height:10
      }
    },
    cardimg : {
      height: 200,
      borderTopLeftRadius : 6,
      borderTopRightRadius : 6,
      marginBottom : 6
    },
    cardbody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal : 16
    },
    cardtitle : {
      fontWeight : 'bold',
      fontSize : 20,
      marginBottom: 5
    },
    cardlabel : {
      fontSize: 14,
      marginBottom: 12
    },
    carddescription : {
      fontSize: 12,
      marginBottom: 20,
      color: '#95a5a6'
    },
    cardfooter :{
      fontSize: 10,
      color: '#3498dbc'
    }
})