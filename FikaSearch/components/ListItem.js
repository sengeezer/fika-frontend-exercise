import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ListItem = ({title, overview, poster, resolveGenreNames, genreIds}) => {
  const [genreNames, setGenreNames] = useState('');
  const filmPoster = `https://image.tmdb.org/t/p/w500${poster}`;

  useEffect(() => {
    (async () => {
      const genreNames1 = await resolveGenreNames(genreIds);

      setGenreNames(genreNames1.toString());
    })();
  }, [genreIds, resolveGenreNames]);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={{uri: filmPoster}}
        resizeMode="contain"
      />

      <Text>Genre(s): {genreNames.split(',').join(', ')}</Text>
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
