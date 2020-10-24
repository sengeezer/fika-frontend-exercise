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

      <Text style={styles.container}>
        <Text style={styles.subTitle}>Genre(s): </Text>
        {genreNames.split(',').join(', ')}
      </Text>
      <Text styles={styles.container}>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f4f4f4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    alignSelf: 'flex-start',
  },
});

export default ListItem;
