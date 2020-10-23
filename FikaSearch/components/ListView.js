import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ListView;
