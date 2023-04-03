import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import newsData from './newsData.json';

const Screen2 = () => {
  const navigation = useNavigation();

  const renderNewsItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsItem', { item })}>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: 'gray', marginBottom: 5 }}>{item.date}</Text>
            <Text numberOfLines={3}>{item.content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={newsData}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ padding: 10 }}
    />
  );
};

export default Screen2;
