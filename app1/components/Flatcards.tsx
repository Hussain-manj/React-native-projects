import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Flatcards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.cardone]}>
                <Text>RED</Text>
        </View>
        <View style = {[styles.card, styles.cardtwo]}>
                <Text>GREEN</Text>
        </View>
        <View style = {[styles.card, styles.cardthree]}>
                <Text>BLUE</Text>
        </View>
         <View style = {[styles.card, styles.cardfour]}>
                <Text>YELLOW</Text>
        </View>
      </View>
    </View>
  )
}

export default Flatcards

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',

    },
    container:{
        flex: 1,
        flexDirection : 'row',        
        justifyContent : 'center',
        alignItems : 'center',
        // margin : 5,
        padding : 6,
    },
    card:{
        flex:  1,
        width: 100,
        height: 100,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : "center",
        margin: 5,
        // padding :4,
    },
    cardone:{
        backgroundColor: '#c0392b',
        
    },
    cardtwo:{
        backgroundColor: '#1abc9c',
        
    },
    cardthree:{
        backgroundColor: '#3498db',
        
    }, 
    cardfour:{
        backgroundColor: '#f39c12',
        
    },
})