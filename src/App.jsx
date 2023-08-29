/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Card } from './component/index';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  main: {
    alignItems: 'center'
  },
  header: {
    height: s(40),
    backgroundColor: 'cyan',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  cart: {
    height: s(30),
    width: s(30),
    borderRadius: s(15),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const product = [
  {
    id: 1,
    name: 'Object 1',
    price: '20',
    image: require('./asset/man.png')
  },
  {
    id: 2,
    name: 'Object 2',
    price: '30',
    image: require('./asset/man.png')
  },
  {
    id: 3,
    name: 'Object 3',
    price: '40',
    image: require('./asset/man.png')
  },
  {
    id: 4,
    name: 'Object 4',
    price: '50',
    image: require('./asset/man.png')
  },
  {
    id: 5,
    name: 'Object 5',
    price: '60',
    image: require('./asset/man.png')
  },
  {
    id: 6,
    name: 'Object 6',
    price: '70',
    image: require('./asset/man.png')
  },
  {
    id: 7,
    name: 'Object 7',
    price: '70',
    image: require('./asset/man.png')
  },
  {
    id: 8,
    name: 'Object 8',
    price: '70',
    image: require('./asset/man.png')
  },
  {
    id: 9,
    name: 'Object 9',
    price: '70',
    image: require('./asset/man.png')
  },
  {
    id: 10,
    name: 'Object 10',
    price: '70',
    image: require('./asset/man.png')
  },
  {
    id: 11,
    name: 'Object 11',
    price: '70',
    image: require('./asset/man.png')
  }
];

function App() {
  const cartData = useSelector((state) => state.reducer)
  const [cart, setCart] = useState(0);
  useEffect(() => {setCart(cartData.length)}, [cartData])
  return (
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.header}>
        <View style={styles.cart}>
          <Text>{cart}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.main}>
        {product.map((item) => <Card cartData={cartData} item={item}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;