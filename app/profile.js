// profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});

export default Profile;
