import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { addToCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

const style = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingTop: s(10),
    paddingBottom: s(10),
    borderBottomColor: 'cyan',
    borderBottomWidth: 1,
    width: '90%'
  },
  image: {
    height: 30,
    width: 30
  }
});

const Card = (props) => {
  const item = props.item;

  const cartData = props.cartData;
  
  const [added, setAdded] = useState(false);
  
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAdded(true);
  }

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
    setAdded(false);
  }
  
  useEffect(() => {
    cartData.forEach(element => {
      if(element.name === item.name) {
        setAdded(true);
      }
    });
  }, [cartData])

  return(
    <View style={style.main}>
      <Image style={style.image} source={item.image} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      {
        added ?
        <Button title='Remove' onPress={()=>{handleRemoveFromCart(item)}} />:
        <Button title='Add' onPress={()=>{handleAddToCart(item)}} />
      }
    </View>
  );
}

export { Card };