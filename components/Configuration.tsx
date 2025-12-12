import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import { Product } from '../entities/Product';

const Configuration = () => {

    const { state, dispatch } = useContext(AppContext);
    const [ tables, changeTables ] = useState(state.tables);


  return (
    <View>
      <Text>Number of Tables</Text>

      <Text>{tables}</Text>

      <Button
        onPress={() => {
            changeTables(tables+1);
            dispatch({ type: "changeTables", payload: tables});
        }}
        title={"+"}
        color="#F59887"                    
      />

      <Button
        onPress={() => {
            if(tables<0 || tables==0){
                console.log("Cant decrease tables...");
            } else{
            changeTables(tables-1);
            dispatch({ type: "changeTables", payload: tables});
        }}}
        title={"-"}
        color="#F59887"                    
      />
    </View>
  )
    
}

export default Configuration

const styles = StyleSheet.create({})