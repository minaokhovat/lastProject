
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const part= ({ route }) => {
  const { partId } = route.params;

  // Fetch part details based on partId

  return (
    <View>
      <Image style={{ width: 200, height: 200 }} />
      <Text>Part Details</Text>
      {/* Render part details here */}
      <Button title="Add to Cart" onPress={() => handleAddToCart(partId)} />
      <Button title="Play Audio" onPress={() => handlePlayAudio(partId)} />
    </View>
  );
};

export default part;
