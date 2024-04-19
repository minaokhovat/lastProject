import React from 'react';
import { NavigationContainer } from 'react-native';
import { createStackNavigator } from 'react-native';
import { AppRegistry, Platform } from 'react-native';
import Categories from './Categories';
import listing from './listing';
import part from './part';
import shopping from './shopping';
import { ImageBackground, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ImageBackground style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Listings" component={listing} />
          <Stack.Screen name="Part" component={part} />
          <Stack.Screen name="ShoppingCart" component={shopping} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default App;
