import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {
    function openWebsite(websiteLink : string){
            Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Actioncard</Text>
        <View style = {[styles.card , styles.cardelevation]}>
            <View style = {styles.headingcontainer}>
                <Text style = {styles.headertext}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa.
                </Text>
            </View>
            <Image
            source={{
                uri: 'https://images.unsplash.com/photo-1499502986432-1ea72377dce0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style = {styles.cardimage}
            />
            <View style = {styles.bodycontainer}>
                <Text numberOfLines={3}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nam sapiente corporis non. Libero at est asperiores dolores velit, excepturi fugit praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cupiditate? Hic fugit minus maiores dicta facere, placeat quidem voluptas nobis odit nisi.
                </Text>
            </View>             
            <View style = {styles.footercontainer}>
                <TouchableOpacity 
                onPress={() => openWebsite('https://unsplash.com/')}>
                    <Text style = {styles.sociallink}>Read More</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => openWebsite('https://instagram.com/')}>
                    <Text style = {styles.sociallink}>Follow Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        
       fontSize: 24,
       fontWeight: 'bold',
       color: 'white', 

    },
    card: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 5,
        height: 500
    },
    cardelevation : {
        backgroundColor: '#76b5c5',
        shadowColor: 'black',
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    headingcontainer : {},
    headertext : {
        color: 'white',
        textAlign: 'center',
        marginTop: 8,
    },
    cardimage: {
        marginTop: 8,
        height :250,
        borderRadius: 15

    },
    bodycontainer : {
        margin: 13
    },
    footercontainer : {
        marginTop:15,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    sociallink :{
        fontSize :20,
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 5,
        color: '#063970'
    }
})