import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import ListItem from './ListItem';
import {getMovies, getGenres} from '../api/fetchData';

const ListView = () => {
  const [isLoading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);

  const [movies, setMovies] = useState([]);

  const getGenreNames = async (genreIds) => {
    let resolvedGenreNames = [];

    await genreIds.forEach((genreId) => {
      genres.forEach((genre) => {
        if (genre.id === genreId) {
          resolvedGenreNames.push(genre.name);
          return;
        }
      });
    });

    return resolvedGenreNames;
  };

  useEffect(() => {
    (async () => {
      const genres1 = await getGenres();
      const movies1 = await getMovies();

      setGenres(genres1);
      setMovies(movies1);
      setLoading(false);
    })();
  }, []);

  const renderItem = ({item}) => (
    <ListItem
      title={item.title}
      overview={item.overview}
      genreIds={item.genre_ids}
      resolveGenreNames={getGenreNames}
      poster={item.poster_path}
    />
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ListView;
