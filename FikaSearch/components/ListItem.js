import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ListItem = ({title, overview, poster}) => {
  const filmPoster = `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={{uri: filmPoster}}
        resizeMode="contain"
      />
      <Text>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
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
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    alignSelf: 'flex-start',
  },
});

export default ListItem;
