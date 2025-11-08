import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

const Elevatedcards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevatedcards</Text>
      <ScrollView  horizontal = {true} style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text>RED</Text>
        </View>

        <View style={[styles.card, styles.cardtwo]}>
          <Text>GREEN</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text>BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Text>YELLOW</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Text>YELLOW</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Text>YELLOW</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Elevatedcards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    padding: 6,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  cardone: {
    backgroundColor: '#c0392b',
  },
  cardtwo: {
    backgroundColor: '#1abc9c',
  },
  cardthree: {
    backgroundColor: '#3498db',
  },
  cardfour: {
    backgroundColor: '#f39c12',
  },
  
});
