import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListItem = ({title, overview}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default ListItem;
