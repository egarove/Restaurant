import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
    const [ description, changeDescription ] = useState("");
    const [ price, changePrice ] = useState("");


  return (
    <View>
      <Text>Introduce new Product's name</Text>

      <TextInput
        onChangeText={changeDescription}
        value={description}
      />

      <Text>Introduce new Product's price</Text>

      <TextInput
        onChangeText={changePrice}
        value={price}
      />
      
      <Button
        onPress={() => {
          dispatch({ type: "addProduct", payload: {description: description, price: parseFloat(price) }});
          console.log(description+"("+price+"€)"+" added");
        }}
        title={"ADD"}
        color="#F59887"                    
      />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})