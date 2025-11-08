import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Hritik Chachu',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Mana Saab',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Molvi saab',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Low Code Tools User',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView 
       style = {styles.container}
       scrollEnabled={false}>

        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style = {styles.userImage}
                />
                <View style= {styles.description}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>

            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
       fontSize: 24,
       fontWeight: 'bold',
       color: 'white', 
    },
    container : {
        marginHorizontal: 30,
        marginVertical: 8,
        // backgroundColor: 'white',
        // borderRadius: 10
    },
    userCard: {
        marginBottom: 10,
        padding: 3,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#a5f2b8',
        borderRadius: 10
        // justifyContent:'f'
    },
    userImage : {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    userName :{
        fontSize: 18,
       fontWeight: 'bold',
    //    textAlign : 'center'
    //    color: 'white', 
    },
    userStatus: {
        fontSize: 15,

    },
    description:{
        marginHorizontal : 8
    }

})