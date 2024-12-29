import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './ItemList';
const App = () => {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
export default App;
