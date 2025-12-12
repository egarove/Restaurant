import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';

const Tables = () => {

    const { state, dispatch } = useContext(AppContext);

    <FlatList
        data={state.tables}
        renderItem={({item}) => {return (
        <View>
            <Button //boton para navegar a los pedidos de cada mesa
                onPress={() => {}}
                title={"Table"+item.toString()}
                color="#F59887"                    
            />
        </View>
        )}}
        keyExtractor={item => item.toString()}
    />
}

export default Tables

const styles = StyleSheet.create({})