
import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

const listing = ({ route, navigation }) => {
  const { category } = route.params;

  const viewPartDetails = (partId) => {
    navigation.navigate('PartDetails', { partId });
  };

  const listings = [
    { id: 1, name: 'Transmition'},
    { id: 2, name: 'seat'},
    { id: 3, name: 'Air filter'},
  ];

  return (
    <ScrollView>
      {listings.map((item) => (
        <View key={item.id}>
          <Image source={item.image} style={{ width: 200, height: 200 }} />
          <Text>{item.name}</Text>
          <Button title="View Details" onPress={() => viewPartDetails(item.id)} />
          {/* Add a button here to select the part */}
          <Button title="Select Part" onPress={() => handlePartSelection(item.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default listing;
