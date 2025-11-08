import {SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcards from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import Actioncard from './components/Actioncard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Flatcards/>
    </View>
     <View>
      <Elevatedcards/>
    </View>
    <View>
      <Fancycards/>
    </View>
    <View>
      <Actioncard/>
    </View>
    <View>
      <ContactList/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
 
});
