
import React from 'react';
import { View, Text, Button } from 'react-native';

const Categories= ({ navigation }) => {
  const navigateToListings = (category) => {
    navigation.navigate('Listings', { category });
  };

  return (
    <View>
      <Text>Categories</Text>
      <Button title="Car" onPress={() => navigateToListings('car')} />
      <Button title="Truck" onPress={() => navigateToListings('truck')} />
    </View>
  );
};

export default Categories;
