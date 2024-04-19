
import React from 'react';
import { View, Text, Button } from 'react-native';

const shopping= () => {
  return (
    <View>
      <Text>Shopping</Text>
      {/* Render items in the shopping cart */}
      <Button title="Checkout" onPress={() => handleCheckout()} />
    </View>
  );
};

export default shopping;
