import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import { Product } from '../entities/Product';

const Configuration = () => {

    const { state, dispatch } = useContext(AppContext);
    const [ tablesNum, changeTablesNum ] = useState(state.tablesNum);
    const [ tables, changeTables ] = useState(state.tables);


  return (
    <View>
      <Text>Number of Tables</Text>

      <Text>{tablesNum}</Text>

      <Button //boton para crecer el numero
        onPress={() => {
            changeTablesNum(tablesNum+1);
            dispatch({ type: "changeTables", payload: tablesNum});
            dispatch({ type: "addTable", payload: tablesNum}); //añado a la lista de mesas que en "Tables" recorro
        }}
        title={"+"}
        color="#F59887"                    
      />

      <Button //boton para decrecer el numero
        onPress={() => {
            if(tablesNum<0 || tablesNum==0){
                console.log("Cant decrease tables...");
            } else{
            changeTablesNum(tablesNum-1);
            dispatch({ type: "changeTables", payload: tablesNum});
            dispatch({ type: "removeTable", payload: tablesNum}); 
        }}}
        title={"-"}
        color="#F59887"                    
      />
    </View>
  )
    
}

export default Configuration

const styles = StyleSheet.create({})